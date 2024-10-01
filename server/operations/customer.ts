import {
  CustomerQuery,
  CustomerQueryVariables,
  CustomerAccessTokenCreateMutation,
  CustomerAccessTokenCreateMutationVariables,
  CustomerAccessTokenDeleteMutation,
  CustomerAccessTokenDeleteMutationVariables,
  CustomerCreateMutation,
  CustomerCreateMutationVariables,
  CustomerRecoverMutation,
  CustomerRecoverMutationVariables,
  CustomerResetMutation,
  CustomerResetMutationVariables,
  CustomerResetByUrlMutation,
  CustomerResetByUrlMutationVariables,
  CustomerAddressCreateMutation,
  CustomerAddressCreateMutationVariables,
  CustomerAddressDeleteMutation,
  CustomerAddressDeleteMutationVariables,
  CustomerAddressUpdateMutation,
  CustomerAddressUpdateMutationVariables
} from '@@/types/shopify';

import { query } from '../utils/client';

import { CUSTOMER } from '../graphql/queries/customer';

import {
  CUSTOMER_ACCESS_TOKEN_CREATE,
  CUSTOMER_ACCESS_TOKEN_DELETE,
  CUSTOMER_CREATE,
  CUSTOMER_RECOVER,
  CUSTOMER_RESET,
  CUSTOMER_RESET_BY_URL,
  CUSTOMER_ADDRESS_CREATE,
  CUSTOMER_ADDRESS_DELETE,
  CUSTOMER_ADDRESS_UPDATE
} from '../graphql/mutations/customer';

/**
 * Fetches customer data based on the provided customer token.
 * @param options - The variables for the customer query (access token)
 * @returns A Promise resolving to the customer data
 * @see https://shopify.dev/docs/api/storefront/2024-07/queries/customer
 */
async function get(
  options: CustomerQueryVariables
): Promise<CustomerQuery['customer']> {
  const response = await query(CUSTOMER, options);
  return response.data?.customer;
};

/**
 * Creates a customer access token for login.
 * @param options - The variables for the customer access token mutation (email, password)
 * @returns A Promise resolving to the customer access token
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerAccessTokenCreate
 */
async function createAccessToken(
  options: CustomerAccessTokenCreateMutationVariables
): Promise<CustomerAccessTokenCreateMutation['customerAccessTokenCreate']> {
  const response = await query(CUSTOMER_ACCESS_TOKEN_CREATE, options);
  return response.data?.customerAccessTokenCreate;
}

/**
 * Deletes a customer access token.
 * @param options - The variables for the access token deletion (access token)
 * @returns A Promise resolving to the deletion status
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerAccessTokenDelete
 */
async function deleteAccessToken(
  options: CustomerAccessTokenDeleteMutationVariables
): Promise<CustomerAccessTokenDeleteMutation['customerAccessTokenDelete']> {
  const response = await query(CUSTOMER_ACCESS_TOKEN_DELETE, options);
  return response.data?.customerAccessTokenDelete;
}

/**
 * Creates a new customer account.
 * @param options - The variables for the customer creation mutation (email, password, etc.)
 * @returns A Promise resolving to the created customer data
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerCreate
 */
async function create(
  options: CustomerCreateMutationVariables
): Promise<CustomerCreateMutation['customerCreate']> {
  const response = await query(CUSTOMER_CREATE, options);
  return response.data?.customerCreate;
}

/**
 * Sends a customer recovery email to reset their password.
 * @param options - The variables for the customer recovery mutation (email)
 * @returns A Promise resolving to the recovery status
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerRecover
 */
async function recover(
  options: CustomerRecoverMutationVariables
): Promise<CustomerRecoverMutation> {
  const response = await query(CUSTOMER_RECOVER, options);
  return response.data?.customerRecover;
}

/**
 * Resets the customer's password.
 * @param options - The variables for the customer reset mutation (customer reset ID, password, reset token)
 * @returns A Promise resolving to the reset status
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerReset
 */
async function reset(
  options: CustomerResetMutationVariables
): Promise<CustomerResetMutation['customerReset']> {
  const response = await query(CUSTOMER_RESET, options);
  return response.data?.customerReset;
}

/**
 * Resets a customer's password using a reset URL.
 * @param options - The variables for the customer password reset by URL mutation (new password, reset URL)
 * @returns A Promise resolving to the password reset status
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerResetByUrl
 */
async function resetByUrl(
  options: CustomerResetByUrlMutationVariables
): Promise<CustomerResetByUrlMutation['customerResetByUrl']> {
  const response = await query(CUSTOMER_RESET_BY_URL, options);
  return response.data?.customerResetByUrl;
}

/**
 * Creates a new customer address.
 * @param options - The variables for the customer address creation mutation (address details, access token)
 * @returns A Promise resolving to the newly created customer address
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerAddressCreate
 */
async function createAddress(
  options: CustomerAddressCreateMutationVariables
): Promise<CustomerAddressCreateMutation['customerAddressCreate']> {
  const response = await query(CUSTOMER_ADDRESS_CREATE, options);
  return response.data?.customerAddressCreate;
}

/**
 * Deletes a customer address.
 * @param options - The variables for the customer address deletion mutation (access token, address ID)
 * @returns A Promise resolving to the deletion status
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerAddressDelete
 */
async function deleteAddress(
  options: CustomerAddressDeleteMutationVariables
): Promise<CustomerAddressDeleteMutation['customerAddressDelete']> {
  const response = await query(CUSTOMER_ADDRESS_DELETE, options);
  return response.data?.customerAddressDelete;
}

/**
 * Updates an existing customer address.
 * @param options - The variables for the customer address update mutation (new address details, access token, address ID)
 * @returns A Promise resolving to the updated customer address
 * @see https://shopify.dev/docs/api/storefront/2024-07/mutations/customerAddressUpdate
 */
async function updateAddress(
  options: CustomerAddressUpdateMutationVariables
): Promise<CustomerAddressUpdateMutation['customerAddressUpdate']> {
  const response = await query(CUSTOMER_ADDRESS_UPDATE, options);
  return response.data?.customerAddressUpdate;
}

export default {
  get,
  create,
  recover,
  reset,
  resetByUrl,
  createAccessToken,
  deleteAccessToken,
  createAddress,
  deleteAddress,
  updateAddress
};