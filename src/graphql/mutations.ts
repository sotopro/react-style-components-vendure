// Here we put queries. Remove next line
import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './fragments';

export const ADD_TO_CART = gql`
mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ...ActiveOrder
  }
}
${ORDER_FRAGMENT}
`;