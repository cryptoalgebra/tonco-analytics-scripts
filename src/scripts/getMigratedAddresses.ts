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

        const ownerToPositionMap = new Map<string, (typeof data.positions)[number]>();

        data.positions.filter(isDefined).forEach((pos) => {
            if (pos.owner && !ownerToPositionMap.has(pos.owner)) {
                ownerToPositionMap.set(pos.owner, pos);
            }
        });

        // Преобразуем Map обратно в массив
        const uniquePositions = Array.from(ownerToPositionMap.values());

        console.log("Total positions:", data.positions.length);
        console.log("Unique positions:", uniquePositions.length);

        const migr = data.positions.filter(isDefined).map((position) => {
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

            return {
                id: position.id,
                owner: position.owner,
                pool: poolName,
                amount0,
                amount1,
                migratedFrom: position.migratedFrom,
                migratedTvlUSD: migratedTvlUSD.toFixed(2),
            };
        });

        console.log("Данные успешно сохранены в файл migratedData.json");
    } catch (error) {
        console.error("Error processing positions:", error);
    }
}

getMigratedAddreses();
