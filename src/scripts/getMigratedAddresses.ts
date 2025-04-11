import { writeFile } from "fs/promises";
import { infoClient } from "../graphql/clients";
import { AllPositionsQuery } from "../graphql/generated/tonco";
import { ALL_POSITIONS } from "../graphql/queries/tonco/positions";
import { formatUnits } from "../utils/formatUnits";
import { isDefined } from "../utils/isDefined";

export async function getMigratedAddreses() {
    console.log("Processing positions...");
    try {
        const { data } = await infoClient.query<AllPositionsQuery>({
            query: ALL_POSITIONS,
            variables: {
                migratedFrom: true,
            },
        });

        if (!data.positions) return;

        const newlyPositions = data.positions
            .filter(isDefined)
            .filter((position) => new Date(position.creationTime).getTime() > Date.now() - 15 * 24 * 60 * 60 * 1000);

        console.log("Total migrations:", data.positions.length);

        console.log("New migrations (created in the last 14 days):", newlyPositions.length);
        console.log("Unique migrations:", newlyPositions.length);

        const migr = newlyPositions
            .filter(isDefined)
            .map((position) => {
                const jetton0 = position.jetton0;
                const jetton1 = position.jetton1;

                const amount0 = formatUnits(position.depositedJetton0, jetton0.decimals);
                const amount1 = formatUnits(position.depositedJetton1, jetton1.decimals);

                const jetton0PriceUSD = jetton0.derivedUsd;
                const jetton1PriceUSD = jetton1.derivedUsd;

                const migratedTvlUSD = Number(jetton0PriceUSD || 0) * Number(amount0) + Number(jetton1PriceUSD || 0) * Number(amount1);

                const symb0 = jetton0.symbol === "wTTon" ? "TON" : jetton0.symbol;
                const symb1 = jetton1.symbol === "wTTon" ? "TON" : jetton1.symbol;
                const poolName = `${symb0} / ${symb1}`;

                if (!poolName.includes("tsTON")) {
                    return null;
                }

                return {
                    id: position.id,
                    owner: position.owner,
                    pool: poolName,
                    amount0,
                    amount1,
                    migratedFrom: position.migratedFrom,
                    migratedTvlUSD: migratedTvlUSD.toFixed(2),
                    createdAt: new Date(position.creationTime).toLocaleString(),
                };
            })
            .filter(isDefined);

        const uniqeOwners = migr.map((mig) => mig.owner).filter((value, index, self) => self.indexOf(value) === index);

        const uniqeMigrs = migr
            .map((mig) => {
                return {
                    id: mig.id,
                    owner: mig.owner,
                    pool: mig.pool,
                    amount0: mig.amount0,
                    amount1: mig.amount1,
                    migratedFrom: mig.migratedFrom,
                    migratedTvlUSD: mig.migratedTvlUSD,
                    createdAt: mig.createdAt,
                };
            })
            .filter((value, index, self) => self.findIndex((mig) => mig.owner === value.owner) === index);

        console.log("tsTON Unique migrations:", uniqeMigrs.length);
        console.log(
            "tsTON migrated TVL:",
            uniqeMigrs.reduce((acc, cur) => acc + Number(cur.migratedTvlUSD), 0)
        );

        console.log("tsTON migrations over $1: ", uniqeMigrs.filter((mig) => Number(mig.migratedTvlUSD) > 1).length);
        console.log("tsTON migrations over $10: ", uniqeMigrs.filter((mig) => Number(mig.migratedTvlUSD) > 10).length);
        console.log("tsTON migrations over $100: ", uniqeMigrs.filter((mig) => Number(mig.migratedTvlUSD) > 100).length);

        // console.log(migr);

        const jsonData = JSON.stringify(uniqeMigrs, null, 2);
        await writeFile("uniqueMigratedData.json", jsonData);
    } catch (error) {
        console.error("Error processing positions:", error);
    }
}
