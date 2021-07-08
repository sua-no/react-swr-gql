import * as React from "react";
import useSWR from "swr";
import { request } from "graphql-request";

import { LANDING_PRODUCTS } from "./gql";
import { GQL_URI } from "./config";

const App = () => {
    const fetcher = (query, first, filter, sortBy) =>
        request(GQL_URI, query, { first, filter, sortBy });

    const { data, error } = useSWR(
        [LANDING_PRODUCTS, 3, { visibleInListings: true }, { field: "PRICE", direction: "DESC" }],
        fetcher
    );
    const loading = !data;
    console.log(loading, data, error);

    return <div>hi</div>;
};

export default App;
