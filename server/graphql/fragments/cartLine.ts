import { gql } from 'graphql-tag';
import { MONEY_FRAGMENT } from './money';
import { PRODUCT_VARIANT_FRAGMENT } from './productVariant';

export const CART_LINE_FRAGMENT = gql`
  fragment CartLine on CartLine {
    cost {
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
    }
    discountAllocations {
      discountedAmount {
        ...Money
      }
    }
    id
    merchandise {
      ... on ProductVariant {
        ...ProductVariant
      }
    }
    quantity
  }
  ${MONEY_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;