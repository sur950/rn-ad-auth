import * as functions from '../../utilities/helpers';
import type { AuthConfig } from '../../types';
import constants from '../../utilities/constants';

const mockUrlParams = {
  client_id: 'xxxx-xxxx-xxx-xxxx',
  scope: 'complete',
  code: 'code-code-code',
  redirect_uri: 'https://www.google.com/',
  grant_type: 'authorization_code',
  client_assertion_type: 'urn:ietf:params',
};

const authParams: AuthConfig = {
  tenant_id: 'xxxx-xxxx-xxx-xxxx',
  client_id: 'xxxx-xxxx-xxx-xxxx',
  scope: 'profile',
};

const serializedOutput =
  '?client_id=xxxx-xxxx-xxx-xxxx&scope=complete&code=code-code-code&redirect_uri=https%3A%2F%2Fwww.google.com%2F&grant_type=authorization_code&client_assertion_type=urn%3Aietf%3Aparams';

describe('validate serializeParams', () => {
  it('should return correct serialized params', () => {
    const res = functions.serializeParams(mockUrlParams);
    expect(res).toBe(serializedOutput);
  });
});

describe('validate getParamValueFromUrl', () => {
  it('should return correct key value from Url', () => {
    const res = functions.getParamValueFromUrl('grant_type', serializedOutput);
    expect(res).toBe('authorization_code');
  });
});

describe('validate login url', () => {
  it('should return correct login url', () => {
    const res = functions.getLoginUrl(authParams);
    expect(res).toBe(
      'https://login.microsoftonline.com/xxxx-xxxx-xxx-xxxx/oauth2/v2.0/authorize/?tenant_id=xxxx-xxxx-xxx-xxxx&client_id=xxxx-xxxx-xxx-xxxx&scope=profile&response_type=code&response_mode=query&state=12345&nonce=678910&redirect_uri=https%3A%2F%2Fazure-ad-login-3606b.web.app%2F'
    );
  });
});

describe('validate logout url', () => {
  it('should return correct login url', () => {
    const res = functions.getLogoutUrl(authParams.tenant_id);
    expect(res).toBe(
      'https://login.microsoftonline.com/xxxx-xxxx-xxx-xxxx/oauth2/v2.0/logout'
    );
  });
});

describe('validate Get User token url', () => {
  it('should return correct get token url', () => {
    const res = functions.getUserTokensUrl(authParams.tenant_id);
    expect(res).toBe(
      'https://login.microsoftonline.com/xxxx-xxxx-xxx-xxxx/oauth2/v2.0/token'
    );
  });
});

describe('validate Graph Url', () => {
  it('should return correct Microsoft Graph Url', () => {
    const res = functions.getUserDetailsUrl();
    expect(res).toBe(constants.GRAPH_ME);
  });
});
