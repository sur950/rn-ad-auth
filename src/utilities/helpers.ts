import constants from './constants';
import type { AuthConfig } from '../types';

/**
 *
 * @param params
 * @returns Serialized Params
 */
const serializeParams = (params: any): string => {
  let paramStr = '';

  Object.keys(params).forEach(function (prop, index) {
    if (params[prop] !== null && params[prop] !== void 0)
      paramStr += `${index == 0 ? '?' : '&'}${prop}=${encodeURIComponent(
        params[prop]
      )}`;
  });

  return paramStr;
};

export const getParamValueFromUrl = (key: string, url: string): string => {
  key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = '[\\?&]' + key + '=([^&#]*)';
  const regex = new RegExp(regexS);
  const results = regex.exec(url) || [];
  return results[1] || '';
};

/**
 *
 * @param tenantId - String
 * @returns Constructs Base url For Auth Process
 */
const baseClientUrl = (tenantId: string): string => {
  return `${constants.CLIENT_URL}/${tenantId}/oauth2/v2.0`;
};

/**
 *
 * @param params - Object
 * @returns
 */
export function getLoginUrl(params: AuthConfig): string {
  const loginParams = {
    ...params,
    ...constants.DEFAULT_LOGIN_PARAMS,
  };
  return `${baseClientUrl(loginParams.tenant_id)}/authorize/${serializeParams(
    loginParams
  )}`;
}

/**
 *
 * @param tenantId - String
 * @returns Logout Url
 */
export function getLogoutUrl(tenantId: string): string {
  return `${baseClientUrl(tenantId)}/logout`;
}

/**
 *
 * @param tenantId - String
 * @returns Returns Url for getting user data.
 */
export function getUserTokensUrl(tenantId: string): string {
  return `${baseClientUrl(tenantId)}/token`;
}

/**
 *
 * @returns - Get User details of Microsoft logged in user.
 */
export function getUserDetailsUrl(): string {
  return constants.GRAPH_ME;
}
