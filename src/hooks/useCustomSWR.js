import { useState, useEffect } from "react";
import useSWR from "swr";
import { request } from "graphql-request";

import { GQL_URI } from "../config";

const fetcher = (query) => request(GQL_URI, query);

export const useCustomSWR = (query) => {
    const [loading, setLoading] = useState(true);
    const { data, error } = useSWR(query, fetcher);

    useEffect(() => {
        if (data && !error) {
            setLoading(false);
        }
    }, [data, error]);

    return { loading, data, error };
};
