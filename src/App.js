import * as React from "react";

import { useCustomSWR } from "./hooks/useCustomSWR";
import { LANDING_PRODUCTS } from "./gql";

const App = () => {
    const [products, setProducts] = React.useState([]);
    const { loading, data, error } = useCustomSWR(LANDING_PRODUCTS);

    React.useEffect(() => {
        if (data && data.products) {
            const edges = data.products.edges.length
                ? data.products.edges.map(({ node }) => node)
                : [];
            setProducts(edges);
        }
    }, [data]);
    console.log(products);

    const renderList = () => {
        return products.map(({ name, pricing, variants }, key) => (
            <div key={key}>
                <span>이름: {name}</span>
                <span>
                    가격: {new Intl.NumberFormat().format(pricing.priceRange.start.gross.amount)}
                </span>
                <span>수량: {new Intl.NumberFormat().format(variants[0].stocks[0].quantity)}</span>
            </div>
        ));
    };

    if (loading) return <div>loading...</div>;
    return !error ? <div>{products.length && renderList()}</div> : <div>error!</div>;
};

export default App;
