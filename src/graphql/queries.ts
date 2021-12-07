// Here we put queries. Remove next line
import { gql } from '@apollo/client';
import  { ORDER_FRAGMENT } from './fragments';

export const GET_ALL_PRODUCTS = gql`{
    products {
      items {
        id
        createdAt
        name
        slug
        description
        variants {
            id
            productId
            sku
            name
            price
            currencyCode
            stockLevel
        }
        assets {
                id
                name
                source
                preview
        }
        collections {
          id
          name
          slug
        }
      }
      totalItems
    }
  }
   `;
export const GET_ACTIVE_ORDER = gql`
   {
     activeOrder {
       ...ActiveOrder
     }
   }
   ${ORDER_FRAGMENT}
 `;