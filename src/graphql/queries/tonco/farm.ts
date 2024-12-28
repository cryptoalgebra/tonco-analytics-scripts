import { gql } from "@apollo/client/core";

export const DISTRIBUTOR_CLAIMS = gql`
    query DistributorClaims($toWallet: String!) {
        distributorClaims(where: { toWallet: $toWallet }) {
            index
            positionId
            toWallet
            farmingId
            jettonAmount
        }
    }
`;
