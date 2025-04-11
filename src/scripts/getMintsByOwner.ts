import { Address } from "@ton/ton";
import { infoClient } from "../graphql/clients";
import { GetBurnsQuery, GetCollectsQuery, GetMintsQuery } from "../graphql/generated/tonco";
import { BURN_TRANSACTIONS, COLLECT_TRANSACTIONS, MINT_TRANSACTIONS } from "../graphql/queries/tonco/transactions";
import { formatUnits } from "../utils/formatUnits";

export async function getMintsByOwner(owner: string) {
    console.log("Fetching mints data...");
    const { data: mints } = await infoClient.query<GetMintsQuery>({
        query: MINT_TRANSACTIONS,
        variables: {
            where: {
                recipient: Address.parse(owner).toString(),
            },
        },
    });

    console.log("Fetching burns data...");
    const { data: burns } = await infoClient.query<GetBurnsQuery>({
        query: BURN_TRANSACTIONS,
        variables: {
            where: {
                recipient: Address.parse(owner).toString(),
            },
        },
    });

    console.log("Fetching collects data...");
    const { data: collects } = await infoClient.query<GetCollectsQuery>({
        query: COLLECT_TRANSACTIONS,
        variables: {
            where: {
                recipient: Address.parse(owner).toString(),
            },
        },
    });

    if (!mints.mints || !burns.burns) return;

    for (const mint of mints.mints) {
        const jetton0 = { ...mint?.pool.jetton0, symbol: mint?.pool.jetton0.symbol === "wTTon" ? "TON" : mint?.pool.jetton0.symbol };
        const jetton1 = { ...mint?.pool.jetton1, symbol: mint?.pool.jetton1.symbol === "wTTon" ? "TON" : mint?.pool.jetton1.symbol };

        const burn = burns.burns.find((burn) => mint?.liquidity === burn?.liquidity);
        console.log(`Position #${burn?.positionId}`);

        const collect = collects?.collects?.find((collect) => burn?.positionId === collect?.positionId);

        const priceLower = 1.0001 ** (mint?.tickLower || 0) * (10 ** (jetton0.decimals || 0) / 10 ** (jetton1.decimals || 0));
        const priceUpper = 1.0001 ** (mint?.tickUpper || 0) * (10 ** (jetton0.decimals || 0) / 10 ** (jetton1.decimals || 0));
        console.log(`Price range: ${priceLower} - ${priceUpper}`);

        console.log(
            `Mint Amounts: ${formatUnits(mint?.amount0 || 0, jetton0.decimals || 0)} ${jetton0.symbol} + ${formatUnits(
                mint?.amount1 || 0,
                jetton1.decimals || 0
            )} ${jetton1.symbol}`
        );
        console.log(
            `Minted: ${new Date(mint?.time || 0).toLocaleString("ru-RU", {
                timeZone: "Europe/Moscow",
            })}`
        );
        if (collect) {
            console.log(
                `Collect amounts: ${formatUnits(collect?.amount0 || 0, jetton0.decimals || 0)} ${jetton0.symbol} + ${formatUnits(
                    collect?.amount1 || 0,
                    jetton1.decimals || 0
                )} ${jetton1.symbol}`
            );
            console.log(
                `Collected: ${new Date(collect?.time || 0).toLocaleString("ru-RU", {
                    timeZone: "Europe/Moscow",
                })}`
            );
        }
        console.log(
            `Burn amounts: ${formatUnits(burn?.amount0 || 0, jetton0.decimals || 0)} ${jetton0.symbol} + ${formatUnits(
                burn?.amount1 || 0,
                jetton1.decimals || 0
            )} ${jetton1.symbol}`
        );
        console.log(
            `Burned: ${new Date(burn?.time || 0).toLocaleString("ru-RU", {
                timeZone: "Europe/Moscow",
            })}`
        );

        console.log("");
    }
}
