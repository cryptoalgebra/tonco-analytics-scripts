import { infoClient } from "../graphql/clients";
import { AllPositionsQuery } from "../graphql/generated/tonco";
import { ALL_POSITIONS } from "../graphql/queries/tonco/positions";
import { getCollectedFees } from "./common/getCollectedFees";
import { formatUnits } from "../utils/formatUnits";
import { isDefined } from "../utils/isDefined";
import { Address } from "@ton/ton";

export async function getTop20TVLPositions(forAllTime: boolean = false) {
    console.log(`Processing ${forAllTime ? "all" : "new (last 7 days)"} positions...`);
    try {
        const { data } = await infoClient.query<AllPositionsQuery>({
            query: ALL_POSITIONS,
        });

        if (!data.positions) return;
        const positions = data.positions.filter(isDefined);

        const activePositions = positions.filter((position) => BigInt(position.liquidity) > BigInt(0));
        const newlyPositions = activePositions.filter(
            (position) => new Date(position.creationTime).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
        );

        const proccessedPositions = forAllTime ? activePositions : newlyPositions;

        console.log("Total positions:", positions.length);
        console.log("Active positions:", activePositions.length);
        console.log("Newly positions (created in the last 7 days):", newlyPositions.length);

        const positionsWithFees = [];

        for (const position of proccessedPositions) {
            console.log(positionsWithFees.length);
            const amount0 = Number(formatUnits(position.amount0, position.jetton0.decimals));
            const amount1 = Number(formatUnits(position.amount1, position.jetton1.decimals));
            const [jetton0Price, jetton1Price] = [position.jetton0.derivedUsd, position.jetton1.derivedUsd];

            if (!jetton0Price || !jetton1Price) continue;

            const totalAmountUsd = amount0 * jetton0Price + amount1 * jetton1Price;
            if (totalAmountUsd < 100) continue;

            const [collectedFeesJetton0, collectedFeesJetton1] = await getCollectedFees(position.pool, position);

            const fees0 = Number(formatUnits(collectedFeesJetton0, position.jetton0.decimals));
            const fees1 = Number(formatUnits(collectedFeesJetton1, position.jetton1.decimals));
            const totalFeesUsd = fees0 * jetton0Price + fees1 * jetton1Price;

            const collectedFees0 = Number(formatUnits(position.collectedFeesJetton0, position.jetton0.decimals));
            const collectedFees1 = Number(formatUnits(position.collectedFeesJetton1, position.jetton1.decimals));
            const totalCollectedFeesUsd = collectedFees0 * jetton0Price + collectedFees1 * jetton1Price;

            const activeDays = (Date.now() - new Date(position.creationTime).getTime()) / (24 * 60 * 60 * 1000);

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
            });
        }

        console.log("Processed positions (liquidity > $100):", positionsWithFees.length);
        const topPositions = positionsWithFees.sort((a, b) => b.totalAmountUsd - a.totalAmountUsd).slice(0, 20);

        console.log("Top 20 positions by TVL:");
        topPositions.forEach((position, index) => {
            console.log(`#${index + 1}:`);
            console.log(`  Pool: ${position.poolName}`);
            console.log(`  Position ID: ${position.id.split(":")[0]}`);
            console.log(`  APR: ${position.apr.toFixed(2)}%`);
            console.log(`  Liquidity (USD): ${position.totalAmountUsd.toFixed(2)}`);
            console.log(`  Earned Fees (USD): ${position.totalFeesUsd.toFixed(2)}`);
            console.log(`  Collected Fees (USD): ${position.totalCollectedFeesUsd.toFixed(2)}`);
            console.log(`  Range: [${position.priceLower.toFixed(4)}] - [${position.priceUpper.toFixed(4)}]`);
            console.log(
                `  Active in: ${
                    position.activeDays * 24 > 24
                        ? `${position.activeDays.toFixed(0)} days ${(
                              Number("0." + position.activeDays.toString().split(".")[1]) * 24
                          ).toFixed(0)} hours`
                        : `${(position.activeDays * 24).toFixed(0)} hours`
                }`
            );
            console.log(`  Created at: ${new Date(position.creationTime).toLocaleString()}`);
            console.log(`  Owner: ${Address.parse(position.owner).toString({ bounceable: false })}`);
        });

        return topPositions;
    } catch (error) {
        console.error(error);
    }
}
