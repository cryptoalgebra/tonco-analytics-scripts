import { gql } from "@apollo/client/core";

export const MINT_TRANSACTIONS = gql`
    query GetMints($where: MintWhere, $filter: Filter) {
        mints(where: $where, filter: $filter) {
            hash
            time
            pool {
                address
                jetton0 {
                    address
                    symbol
                    decimals
                }
                jetton1 {
                    address
                    symbol
                    decimals
                }
            }
            feeGrowthInside0X128
            feeGrowthInside1X128
            amount0
            amount1
            liquidity
            wallet: recipient
            tickLower
            tickUpper
            amountUsd
        }
    }
`;

export const SWAP_TRANSACTIONS = gql`
    query GetSwaps($where: SwapWhere, $filter: Filter) {
        swaps(where: $where, filter: $filter) {
            toRefund1
            toRefund0
            to
            time
            sqrtPriceLimitX96
            pool {
                address
                jetton0 {
                    address
                    symbol
                    decimals
                    derivedUsd
                }
                jetton1 {
                    address
                    symbol
                    decimals
                    derivedUsd
                }
            }
            hash
            wallet: from
            amount
        }
    }
`;

export const BURN_TRANSACTIONS = gql`
    query GetBurns($where: BurnWhere, $filter: Filter) {
        burns(where: $where, filter: $filter) {
            time
            tickUpper
            tickLower
            wallet: recipient
            positionId
            pool {
                address
                jetton0 {
                    address
                    symbol
                    decimals
                }
                jetton1 {
                    address
                    symbol
                    decimals
                }
            }
            liquidity2Burn
            liquidity
            hash
            feeGrowthInside1LastX128
            feeGrowthInside0LastX128
            amount1
            amount0
        }
    }
`;

export const COLLECT_TRANSACTIONS = gql`
    query GetCollects($where: CollectWhere, $filter: Filter) {
        collects(where: $where, filter: $filter) {
            time
            wallet: recipient
            positionId
            pool {
                address
                jetton0 {
                    address
                    symbol
                    decimals
                }
                jetton1 {
                    address
                    symbol
                    decimals
                }
            }
            hash
            feeGrowthInside1LastX128
            feeGrowthInside0LastX128
            amount1
            amount0
        }
    }
`;
