import { ApolloClient, InMemoryCache } from "@apollo/client/core";

export const infoClient = new ApolloClient({
    uri: "https://indexer.tonco.io",
    cache: new InMemoryCache(),
});
