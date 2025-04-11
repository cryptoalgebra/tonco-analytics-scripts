import { Api, HttpClient } from "tonapi-sdk-js";

/* tonApi client for fetching additional data, such as jetton balances, etc. */
export function getTonApiClient(): Api<unknown> {
    const httpClient = new HttpClient({
        baseUrl: "https://tonapi.io",
    });
    const tonConsoleClient = new Api(httpClient);

    return tonConsoleClient;
}
