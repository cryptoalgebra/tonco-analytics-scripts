import { gql } from "@apollo/client/core";

export const ALL_DEDUST_POOLS = gql`
    query DedustPools {
        pools {
            address
            assets
            reserves
            totalSupply
            fees
        }
    }
`;
