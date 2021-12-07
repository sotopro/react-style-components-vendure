import { gql } from '@apollo/client';

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    code
    state
    total
    currencyCode
    lines {
      id
      productVariant {
        id
        name
        currencyCode
      }
      unitPriceWithTax
      quantity
      featuredAsset {
        id
        preview
      }
    }
  }
`;