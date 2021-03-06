import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SWRConfig } from "swr";

import { GQL_URI } from "./config";

const client = new ApolloClient({
    uri: GQL_URI,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <SWRConfig
            value={{
                refreshInterval: 10000,
                fetcher: (...args) => fetch(...args).then((res) => res.json()),
            }}
        >
            <App />
        </SWRConfig>
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
