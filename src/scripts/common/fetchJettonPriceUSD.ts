import { Address } from "@ton/ton";
import { Jetton, pTON_MINTER } from "@toncodex/sdk";
import { Api } from "tonapi-sdk-js";
import { getTonApiClient } from "../../service/tonApiClient";

export async function fetchJettonUSDPrice(jettonAddress: string): Promise<number> {
    const client = getTonApiClient();
    try {
        if (Address.parse(jettonAddress).equals(Address.parse(pTON_MINTER))) {
            const rates = await client.rates.getRates({
                tokens: ["ton"],
                currencies: ["usd"],
            });
            return Number(rates.rates.TON.prices?.USD);
        }
        const rates = await client.rates.getRates({
            tokens: [jettonAddress],
            currencies: ["usd"],
        });
        return Number(rates.rates[jettonAddress].prices?.USD);
    } catch (e) {
        console.log("retrying");
        return fetchJettonUSDPrice(jettonAddress);
    }
}
