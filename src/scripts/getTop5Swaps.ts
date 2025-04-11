import { formatAmount } from "../utils/formatAmount";
import { formatUnits } from "../utils/formatUnits";
import { getAllSwaps } from "./common/getAllSwaps";

export async function getTop5Swaps() {
    try {
        console.log("Fetching swaps...");
        const swaps = await getAllSwaps();

        const _swaps =
            swaps?.map((swap) => {
                if (swap?.toRefund1 === swap?.amount.toString() || swap?.toRefund0 === swap?.amount.toString()) return undefined;
                const zeroToOne = swap?.toRefund0 === "0";
                const amount0 = swap?.toRefund0 === "0" ? swap.amount : swap?.toRefund0;
                const amount1 = swap?.toRefund1 === "0" ? swap.amount : swap?.toRefund1;

                const token0 = swap?.pool.jetton0;
                const token1 = swap?.pool.jetton1;

                const symb0 = token0?.symbol === "wTTon" ? "TON" : token0?.symbol;
                const symb1 = token1?.symbol === "wTTon" ? "TON" : token1?.symbol;

                const formattedAmount0 = formatUnits(amount0 || 0, token0?.decimals || 0);
                const formattedAmount1 = formatUnits(amount1 || 0, token1?.decimals || 0);

                const amount0Usd = (token0?.derivedUsd || 0) * Number(formattedAmount0);
                const amount1Usd = (token1?.derivedUsd || 0) * Number(formattedAmount1);
                const amountsUsd = amount0Usd + amount1Usd;

                return {
                    ...swap,
                    zeroToOne,
                    symb0,
                    symb1,
                    amount0: formattedAmount0,
                    amount1: formattedAmount1,
                    amount0Usd,
                    amount1Usd,
                    amountsUsd,
                };
            }) || [];

        const top5Swaps = _swaps.sort((a, b) => (b?.amount0Usd || 0) - (a?.amount0Usd || 0)).slice(0, 10);

        top5Swaps.forEach((swap, index) => {
            const swapName = swap?.zeroToOne
                ? `Swap ${formatAmount(swap?.amount0 || 0)} ${swap?.symb0} -> ${formatAmount(swap?.amount1 || 0)} ${swap?.symb1}`
                : `Swap ${formatAmount(swap?.amount1 || 0)} ${swap?.symb1} -> ${formatAmount(swap?.amount0 || 0)} ${swap?.symb0}`;

            console.log(
                `
${index + 1}. ${swapName}
Volume USD: $${formatAmount(Number(swap?.zeroToOne ? swap?.amount0Usd : swap?.amount1Usd), 2)} 
Time: ${new Date(swap?.time || 0).toLocaleString("ru-RU", {
                    timeZone: "Europe/Moscow",
                })}

Tonviewer: https://tonviewer.com/transaction/${swap?.hash}
`
            );
        });
    } catch (e) {
        console.log(e);
    }
}
