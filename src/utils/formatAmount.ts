export function formatAmount(amount: string | number, decimals = 3): string {
    const amountNum = Number(amount);
    const minAmount = 1 / 10 ** decimals;

    if (amountNum === 0) return "0";
    if (amountNum < minAmount) return `< ${minAmount}`;
    if (amountNum < 1) return Number((Math.floor(amountNum / minAmount) * minAmount).toFixed(decimals)).toString();
    if (amountNum < 1_000)
        return (Math.floor(amountNum * 100) / 100).toLocaleString("en-us", {
            maximumFractionDigits: 2,
        });
    if (amountNum < 100_000_000)
        return Math.floor(amountNum).toLocaleString("en-us", {
            maximumFractionDigits: 0,
        });

    if (amountNum < 1 * 10 ** 18)
        return Math.floor(amountNum).toLocaleString("en-us", {
            notation: "compact",
            maximumFractionDigits: 0,
        });

    return "∞";
}
