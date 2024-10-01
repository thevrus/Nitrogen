import {
  CartQuery,
  CartQueryVariables,
  CartCreateMutation,
  CartCreateMutationVariables,
  CartLinesAddMutation,
  CartLinesAddMutationVariables,
  CartLinesRemoveMutation,
  CartLinesRemoveMutationVariables,
  CartLinesUpdateMutation,
  CartLinesUpdateMutationVariables,
  CartBuyerIdentityUpdateMutation,
  CartBuyerIdentityUpdateMutationVariables
} from '@@/types/shopify';

import { query } from '../utils/client';

import { CART } from '../graphql/queries/cart';

import {
  CART_CREATE,
  CART_LINES_ADD,
  CART_LINES_REMOVE,
  CART_LINES_UPDATE,
  CART_BUYER_IDENTITY_UPDATE
} from '../graphql/mutations/cart';

/**
 * Fetches a cart based on the provided cart ID.
 * @param options - The variables for the cart query (cart ID)
 * @returns A Promise resolving to the cart details
 * @see https://shopify.dev/docs/api/storefront/2024-07/queries/cart
 */
async function get(
  options: CartQueryVariables
): Promise<CartQuery['cart']> {
  const response = await query(CART, options);
  return response.data?.cart;
};

/**
 * Creates a new cart.
 * @param options - The variables for the cart creation mutation (input details)
 * @returns A Promise resolving to the created cart
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/cartCreate
 */
async function create(
  options: CartCreateMutationVariables
): Promise<CartCreateMutation['cartCreate']> {
  const response = await query(CART_CREATE, options);
  return response.data?.cartCreate;
}

/**
 * Adds line items to the cart.
 * @param options - The variables for the cart lines add mutation (cart ID, lines)
 * @returns A Promise resolving to the updated cart after adding lines
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/cartLinesAdd
 */
async function addLines(
  options: CartLinesAddMutationVariables
): Promise<CartLinesAddMutation['cartLinesAdd']> {
  const response = await query(CART_LINES_ADD, options);
  return response.data?.cartLinesAdd;
}

/**
 * Removes line items from the cart.
 * @param options - The variables for the cart lines remove mutation (cart ID, line IDs)
 * @returns A Promise resolving to the updated cart after removing lines
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/cartLinesRemove
 */
async function removeLines(
  options: CartLinesRemoveMutationVariables
): Promise<CartLinesRemoveMutation['cartLinesRemove']> {
  const response = await query(CART_LINES_REMOVE, options);
  return response.data?.cartLinesRemove;
}

/**
 * Updates line items in the cart.
 * @param options - The variables for the cart lines update mutation (cart ID, lines)
 * @returns A Promise resolving to the updated cart after updating lines
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/cartLinesUpdate
 */
async function updateLines(
  options: CartLinesUpdateMutationVariables
): Promise<CartLinesUpdateMutation['cartLinesUpdate']> {
  const response = await query(CART_LINES_UPDATE, options);
  return response.data?.cartLinesUpdate;
}

/**
 * Updates the buyer's identity in the cart.
 * @param options - The variables for the cart buyer identity update mutation (cart ID, buyer identity)
 * @returns A Promise resolving to the updated cart with the new buyer identity
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/cartBuyerIdentityUpdate
 */
async function updateBuyerIdentity(
  options: CartBuyerIdentityUpdateMutationVariables
): Promise<CartBuyerIdentityUpdateMutation['cartBuyerIdentityUpdate']> {
  const response = await query(CART_BUYER_IDENTITY_UPDATE, options);
  return response.data?.cartBuyerIdentityUpdate;
}

export default {
  get,
  create,
  addLines,
  removeLines,
  updateLines,
  updateBuyerIdentity
};