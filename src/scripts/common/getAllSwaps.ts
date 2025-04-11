import { infoClient } from "../../graphql/clients";
import { GetSwapsQuery } from "../../graphql/generated/tonco";
import { SWAP_TRANSACTIONS } from "../../graphql/queries/tonco/transactions";

export const getAllSwaps = async () => {
    const now = Date.now();
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    const queries = Array.from({ length: 12 }, (_, i) =>
        infoClient.query<GetSwapsQuery>({
            query: SWAP_TRANSACTIONS,
            variables: {
                where: {
                    time: {
                        gt: (now - (i + 1) * oneMonth).toString(),
                        lt: (now - i * oneMonth).toString(),
                    },
                },
            },
        })
    );

    const results = await Promise.all(queries);
    return results.flatMap(({ data }) => data.swaps);
};
