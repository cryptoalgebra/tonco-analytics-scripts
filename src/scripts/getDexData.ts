import { infoClient } from "../graphql/clients";
import { AllPositionsQuery, DexDataQuery, GroupBy } from "../graphql/generated/tonco";
import { DEX_DATA } from "../graphql/queries/tonco/dex";
import { ALL_POSITIONS } from "../graphql/queries/tonco/positions";
import { formatUnits } from "../utils/formatUnits";
import { isDefined } from "../utils/isDefined";
import { getAllSwaps } from "./common/getAllSwaps";

export async function getDexData() {
    const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;

    try {
        console.log("Fetching swaps...");
        const swapDatas = await getAllSwaps();

        console.log("Fetching positions...");
        const { data: positions } = await infoClient.query<AllPositionsQuery>({
            query: ALL_POSITIONS,
        });

        console.log("Fetching dex data...");
        const { data } = await infoClient.query<DexDataQuery>({
            query: DEX_DATA,
            variables: {
                from: monthAgo,
                to: Date.now(),
                groupBy: GroupBy.Day,
            },
        });

        const dexData = data.dexData?.[data.dexData.length - 1];
        const dexDataMonthAgo = data.dexData?.[0];
        const positionsData = positions.positions?.filter(isDefined);

        if (!dexData || !positionsData || !dexDataMonthAgo || !swapDatas) {
            console.log("No dex data found");
            return;
        }

        const allTimeStats = {
            totalLiquidity: dexData.totalValueLockedUsd,
            totalVolume: dexData.totalVolumeUsd,
            totalFees: dexData.totalFeesUsd,
            totalPositions: positionsData?.length,
            activePositions: positionsData?.filter((position) => BigInt(position.liquidity) > BigInt(0)).length,
            pools: dexData.poolCount,
            liquidityMigrated: positionsData?.reduce(
                (acc, position) =>
                    acc +
                    Number(formatUnits(position.amount0, position.jetton0.decimals)) * position.jetton0.derivedUsd +
                    Number(formatUnits(position.amount1, position.jetton1.decimals)) * position.jetton1.derivedUsd,
                0
            ),
            migrations: positionsData?.filter((position) => position.migratedFrom).length,
            transactions: dexData.txCount,
            totalSwaps: swapDatas.length,
        };

        const monthlyStats = {
            totalVolume: dexData.totalVolumeUsd - dexDataMonthAgo.totalVolumeUsd,
            totalFees: dexData.totalFeesUsd - dexDataMonthAgo.totalFeesUsd,
            newPositions: positionsData.filter((position) => new Date(position.creationTime).getTime() > monthAgo).length,
            newPools: dexData.poolCount - dexDataMonthAgo.poolCount,
            transactions: dexData.txCount - dexDataMonthAgo.txCount,
            totalSwaps: swapDatas.filter((swap) => new Date(swap?.time).getTime() > monthAgo).length,
        };

        console.log("All time stats:");
        console.log(`Total Liquidity: $${allTimeStats.totalLiquidity.toLocaleString()}`);
        console.log(`Total Volume: $${allTimeStats.totalVolume.toLocaleString()}`);
        console.log(`Total Fees: $${allTimeStats.totalFees.toLocaleString()}`);
        console.log("");
        console.log(`Total Positions: ${allTimeStats.totalPositions.toLocaleString()}`);
        console.log(`Active positions (liquidity > 0): ${allTimeStats.activePositions.toLocaleString()}`);
        console.log(`Pools: ${allTimeStats.pools.toLocaleString()}`);
        console.log("");
        console.log(`$${allTimeStats.liquidityMigrated.toLocaleString()} liquidity migrated`);
        console.log(`${allTimeStats.migrations.toLocaleString()} migrations`);
        console.log("");
        console.log(`${allTimeStats.transactions.toLocaleString()} transactions`);
        console.log(`Total swaps: ${allTimeStats.totalSwaps.toLocaleString()}`);
        console.log("");
        console.log("--------------------------");
        console.log("");
        console.log("Monthly stats:");
        console.log(`Total Volume: $${monthlyStats.totalVolume.toLocaleString()}`);
        console.log(`Total Fees: $${monthlyStats.totalFees.toLocaleString()}`);
        console.log("");
        console.log(`New positions (created in the last 31 days): ${monthlyStats.newPositions.toLocaleString()}`);
        console.log(`New pools: ${monthlyStats.newPools.toLocaleString()}`);
        console.log("");
        console.log(`${monthlyStats.transactions.toLocaleString()} transactions`);
        console.log(`Total swaps: ${monthlyStats.totalSwaps.toLocaleString()}`);
    } catch (error) {
        console.log(error as any);
    }
}
