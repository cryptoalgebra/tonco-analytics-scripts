import { gql } from "@apollo/client/core";

export const POSITION_FRAGMENT = gql`
    fragment PositionFields on Position {
        id
        owner
        pool
        jetton0 {
            ...JettonFields
        }
        jetton1 {
            ...JettonFields
        }
        tickLower
        tickUpper
        liquidity
        nftAddress
        nftImage
        feeGrowthInside0LastX128
        feeGrowthInside1LastX128
        migratedFrom
        depositedJetton0
        depositedJetton1
    }
`;

export const ALL_POSITIONS = gql`
    query AllPositions($owner: String, $pool: String, $migratedFrom: Boolean) {
        positions(where: { owner: $owner, pool: $pool, migratedFrom: $migratedFrom }) {
            id
            amount0
            amount1
            owner
            pool
            jetton0 {
                address
                symbol
                name
                decimals
                image
                description
                derivedTon
                derivedUsd
                feesUsd
                totalSupply
                totalValueLocked
                totalValueLockedUsd
                txCount
                volume
                volumeUsd
            }
            jetton1 {
                address
                symbol
                name
                decimals
                image
                description
                derivedTon
                derivedUsd
                feesUsd
                totalSupply
                totalValueLocked
                totalValueLockedUsd
                txCount
                volume
                volumeUsd
            }
            tickLower
            tickUpper
            liquidity
            nftAddress
            nftImage
            feeGrowthInside0LastX128
            feeGrowthInside1LastX128
            migratedFrom
            depositedJetton0
            depositedJetton1
            creationTime
            collectedFeesJetton0
            collectedFeesJetton1
        }
    }
`;
