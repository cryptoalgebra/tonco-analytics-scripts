import { getHttpV4Endpoint } from "@orbs-network/ton-access";
import { TonClient4 } from "@ton/ton";

export async function getTonClient(): Promise<TonClient4> {
    const endpoint = await getHttpV4Endpoint();
    const client = new TonClient4({ endpoint });

    return client;
}
