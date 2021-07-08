import { gql } from "@apollo/client";

const productFragment = gql`
    fragment productField on Product {
        id
        name
        pricing {
            priceRange {
                start {
                    gross {
                        amount
                    }
                }
            }
        }
        variants {
            copyright {
                name
                singer
            }
            stocks {
                quantity
            }
        }
    }
`;

export const LANDING_PRODUCTS = `
    ${productFragment}
    query landingProducts($first: Int, $filter: ProductFilterInput, $sortBy: ProductOrder) {
        products(first: $first, filter: $filter, sortBy: $sortBy) {
            edges {
                node {
                    ...productField
                }
            }
        }
    }
`;
