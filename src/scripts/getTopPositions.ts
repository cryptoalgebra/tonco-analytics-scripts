import { infoClient } from "../graphql/clients";
import { AllPositionsQuery, GetMintsQuery } from "../graphql/generated/tonco";
import { ALL_POSITIONS } from "../graphql/queries/tonco/positions";
import { MINT_TRANSACTIONS } from "../graphql/queries/tonco/transactions";
import { getCollectedFees } from "./common/getCollectedFees";
import { formatAmount } from "../utils/formatAmount";
import { formatUnits } from "../utils/formatUnits";
import { isDefined } from "../utils/isDefined";
import { Address } from "@ton/ton";
import { writeFile } from "fs/promises";

export async function getTopPositions(periodDays: number = 7, sortBy: "pnl" | "apr" | "roi" = "apr") {
    console.log(`Processing positions created in the last ${periodDays} days ...`);

    try {
        const { data } = await infoClient.query<AllPositionsQuery>({
            query: ALL_POSITIONS,
        });

        const { data: mintDatas } = await infoClient.query<GetMintsQuery>({
            query: MINT_TRANSACTIONS,
        });

        if (!data.positions || !mintDatas.mints) return;
        const positions = data.positions.filter(isDefined);
        const mints = mintDatas.mints.filter(isDefined);

        const activePositions = positions.filter((position) => BigInt(position.liquidity) > BigInt(0));
        const proccessedPositions = activePositions.filter(
            (position) => new Date(position.creationTime).getTime() > Date.now() - periodDays * 24 * 60 * 60 * 1000
        );

        console.log("Total positions:", positions.length);
        console.log("Total Active positions:", activePositions.length);
        console.log("Positions created in the last", periodDays, "days:", proccessedPositions.length);

        const positionsWithFees = [];

        let processedCount = 0;
        const totalPositions = proccessedPositions.length;

        for (const position of proccessedPositions) {
            const amount0 = Number(formatUnits(position.amount0, position.jetton0.decimals));
            const amount1 = Number(formatUnits(position.amount1, position.jetton1.decimals));
            const totalAmountUsd = amount0 * position.jetton0.derivedUsd + amount1 * position.jetton1.derivedUsd;
            if (totalAmountUsd < 100) continue;

            const [collectedFeesJetton0, collectedFeesJetton1] = await getCollectedFees(position.pool, position);

            const fees0 = Number(formatUnits(collectedFeesJetton0, position.jetton0.decimals));
            const fees1 = Number(formatUnits(collectedFeesJetton1, position.jetton1.decimals));
            const totalFeesUsd = fees0 * position.jetton0.derivedUsd + fees1 * position.jetton1.derivedUsd;

            const collectedFees0 = Number(formatUnits(position.collectedFeesJetton0, position.jetton0.decimals));
            const collectedFees1 = Number(formatUnits(position.collectedFeesJetton1, position.jetton1.decimals));
            const totalCollectedFeesUsd = collectedFees0 * position.jetton0.derivedUsd + collectedFees1 * position.jetton1.derivedUsd;

            const withdrawnAmount0 = position.withdrawnJetton0;
            const withdrawnAmount1 = position.withdrawnJetton1;
            const totalWithdrawnUsd =
                Number(formatUnits(withdrawnAmount0, position.jetton0.decimals)) * position.jetton0.derivedUsd +
                Number(formatUnits(withdrawnAmount1, position.jetton1.decimals)) * position.jetton1.derivedUsd;

            if (totalFeesUsd === 0 && totalCollectedFeesUsd === 0) continue;

            const activeDays = (Date.now() - new Date(position.creationTime).getTime()) / (24 * 60 * 60 * 1000);

            const initialAmountUsd = mints.find((m) => {
                return new Date(m.time).getTime() === new Date(position.creationTime).getTime();
            })?.amountUsd;

            if (!initialAmountUsd) continue;

            const currentAmountUsd = totalAmountUsd + totalFeesUsd + totalCollectedFeesUsd + totalWithdrawnUsd;

            const pnl = initialAmountUsd ? currentAmountUsd - Number(initialAmountUsd) : 0;
            const roi = (pnl / Number(initialAmountUsd)) * 100;

            const apr = totalAmountUsd > 0 ? ((totalFeesUsd + totalCollectedFeesUsd) / activeDays / totalAmountUsd) * 365 * 100 : 0;

            const decimalsDiff = Math.abs(position.jetton0.decimals - position.jetton1.decimals);

            const priceLower = decimalsDiff > 0 ? 1.0001 ** position.tickLower * 10 ** decimalsDiff : 1.0001 ** position.tickLower;
            const priceUpper = decimalsDiff > 0 ? 1.0001 ** position.tickUpper * 10 ** decimalsDiff : 1.0001 ** position.tickUpper;

            const symb0 = position.jetton0.symbol === "wTTon" ? "TON" : position.jetton0.symbol;
            const symb1 = position.jetton1.symbol === "wTTon" ? "TON" : position.jetton1.symbol;
            const poolName = `${symb0} / ${symb1}`;

            positionsWithFees.push({
                ...position,
                fees0,
                fees1,
                totalFeesUsd,
                totalAmountUsd,
                totalCollectedFeesUsd,
                apr,
                priceLower,
                priceUpper,
                poolName,
                activeDays,
                initialAmountUsd: Number(initialAmountUsd),
                currentAmountUsd,
                pnl,
                roi,
            });

            processedCount++;
            process.stdout.write(`\rProcessing positions: ${processedCount}/${totalPositions}...`);
        }

        console.log(" ");
        console.log("Processed positions (liquidity > $100 and fees > $0):", positionsWithFees.length);
        const topPositions = positionsWithFees.sort((a, b) => {
            switch (sortBy) {
                case "pnl":
                    return b.pnl - a.pnl;
                case "apr":
                    return b.apr - a.apr;
                case "roi":
                    return b.roi - a.roi;
            }
        });
        const top5Positions = topPositions.slice(0, 5);

        console.log(`Top ${top5Positions.length} positions by ${sortBy}:`);
        top5Positions.forEach((position, index) => {
            console.log(`#${index + 1}:`);
            console.log(`  Pool: ${position.poolName}`);
            console.log(`  Position ID: ${position.id.split(":")[0]}`);
            console.log(`  Initial Liquidity (USD): ${Number(position.initialAmountUsd || 0).toFixed(2)}`);
            console.log(`  Liquidity (USD): ${position.totalAmountUsd.toFixed(2)}`);
            console.log(`  Earned Fees (USD): ${position.totalFeesUsd.toFixed(2)}`);
            console.log(`  Collected Fees (USD): ${position.totalCollectedFeesUsd.toFixed(2)}`);
            console.log(`  Range: [${position.priceLower.toFixed(4)}] - [${position.priceUpper.toFixed(4)}]`);
            console.log(`  Created at: ${new Date(position.creationTime).toLocaleString()}`);
            console.log(`  Owner: ${Address.parse(position.owner).toString({ bounceable: false })}`);
            console.log(" ");
            console.log(`  APR: ${position.apr.toFixed(2)}%`);
            console.log(
                `  PnL (USD): ${position.pnl > 0 ? "+" : "-"}$${formatAmount(position.pnl.toString().split("-")[1] || position.pnl)}`
            );
            console.log(`  ROI: ${position.roi > 0 ? "+" : "-"}${formatAmount(position.roi.toString().split("-")[1] || position.roi)}%`);
            console.log(
                `  Active in: ${
                    position.activeDays * 24 > 24
                        ? `${position.activeDays.toFixed(0)} days ${(
                              Number("0." + position.activeDays.toString().split(".")[1]) * 24
                          ).toFixed(0)} hours`
                        : `${(position.activeDays * 24).toFixed(0)} hours`
                }`
            );
            console.log(" ");
        });

        const jsonData = JSON.stringify(
            topPositions.map((p, idx) => ({
                rank: idx + 1,
                pool: p.poolName,
                id: p.id.split(":")[0],
                pnlUsd: p.pnl,
                roi: p.roi,
                apr: p.apr,
                initialAmountUsd: p.initialAmountUsd,
                currentAmountUsd: p.currentAmountUsd,
                range: `${p.priceLower.toFixed(4)} - ${p.priceUpper.toFixed(4)}`,
                owner: p.owner,
            })),
            null,
            2
        );
        await writeFile("data/topPositions.json", jsonData);
        console.log("Extended data saved to data/topPositions.json");
        return topPositions;
    } catch (error) {
        console.error(error);
    }
}
