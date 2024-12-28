import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export const infoClient = new ApolloClient({
    uri: process.env.INFO_GRAPH,
    cache: new InMemoryCache(),
});

export const dedustClient = new ApolloClient({
    uri: "https://api.dedust.io/v3/graphql",
    cache: new InMemoryCache(),
});
