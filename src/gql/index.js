export const LANDING_PRODUCTS = `
    query {
        products(first: 2, sortBy: {field: ID, direction: DESC}) {
            edges {
                node {
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
            stocks {
                quantity
            }
        }
                }
            }
        }
    }
`;
