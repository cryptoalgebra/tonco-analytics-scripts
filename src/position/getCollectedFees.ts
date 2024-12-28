import { PoolV3Contract } from "@toncodex/sdk";
import { getTonClient } from "../service/tonClient";
import { Address } from "@ton/ton";
import { AllPositionsQuery, Position } from "../graphql/generated/tonco";

export async function getCollectedFees(poolAddress: string, position: any) {
    const client = await getTonClient();

    const poolV3Contract = client.open(new PoolV3Contract(Address.parse(poolAddress)));

    const fees = await poolV3Contract.getCollectedFees(
        position.tickLower,
        position.tickUpper,
        BigInt(position.liquidity),
        BigInt(position.feeGrowthInside0LastX128),
        BigInt(position.feeGrowthInside1LastX128)
    );

    return [fees.amount0, fees.amount1];
}
