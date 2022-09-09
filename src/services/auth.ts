import { getUserTokensUrl, getUserDetailsUrl } from '../utilities/helpers';
import { get, post } from '../utilities/networking';
import type { RefreshTokenParams, AuthTokenRequestDataType } from '../types';

/**
 *
 * @param data
 * @returns - Refreshed Token and accesstoken
 */
export const getRefreshToken = async (data: RefreshTokenParams) => {
  const url = getUserTokensUrl(data.tenant_id);
  return await post(url, data);
};

/**
 *
 * @param data
 * @returns Auth Tokens {Access token & Refresh Token}
 */
export const getAuthTokens = async (data: AuthTokenRequestDataType) => {
  const url = getUserTokensUrl(data.tenant_id);
  return await post(url, data);
};

/**
 *
 * @param accessToken - Token Received from Microsoft Login
 * @returns User Data registered on Microsoft
 */
export const getUserDetails = async (accessToken: string) => {
  const url = getUserDetailsUrl();
  return await get(url, accessToken);
};
