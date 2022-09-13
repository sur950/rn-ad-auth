import * as APIMethods from '../../utilities/networking';
import {
  getRefreshToken,
  getAuthTokens,
  getUserDetails,
} from '../../services/auth';
import type { RefreshTokenParams, AuthTokenRequestDataType } from '../../types';

const refreshTokenData: RefreshTokenParams = {
  tenant_id: 'xxxxxxxx-xxxx-xxxx-xxxxxxxxxx',
  client_id: 'xxxxxxxx-xxxx-xxxx-xxxxxxxxxx',
  scope: 'profile',
  refresh_token: 'refresh-token-here',
  grant_type: 'authorization_code',
};

const authTokenParams: AuthTokenRequestDataType = {
  code: '0.xxxxxxxx',
  client_id: 'xxxxxxxx-xxxx-xxxx-xxxxxxxxxx',
  tenant_id: 'xxxxxxxx-xxxx-xxxx-xxxxxxxxxx',
  scope: 'profile',
  grant_type: 'string',
  client_assertion_type: 'urn:ietf',
  redirect_uri: 'https://www.google.com/',
};

describe('Get Refresh Token', () => {
  const mockedValues = {
    accessToken: 'access-token-here',
    refreshtoken: 'refresh-token-here',
  };
  test('Refresh Token', async () => {
    const postRequestMethod = jest
      .spyOn(APIMethods, 'post')
      .mockImplementation(
        () =>
          new Promise<{ accessToken: string; refreshtoken: string }>(
            (resolve) => resolve(mockedValues)
          )
      );
    const res = await getRefreshToken(refreshTokenData);
    expect(postRequestMethod).toHaveBeenCalledTimes(1);
    expect(res).toStrictEqual(mockedValues);
  });
});

describe('Get Auth Token', () => {
  const mockedValues = {
    accessToken: 'access-token-here',
    refreshtoken: 'refresh-token-here',
  };
  test('Request for Auth Tokens', async () => {
    const postRequestMethod = jest
      .spyOn(APIMethods, 'post')
      .mockImplementation(
        () =>
          new Promise<{ accessToken: string; refreshtoken: string }>(
            (resolve) => resolve(mockedValues)
          )
      );
    const res = await getAuthTokens(authTokenParams);
    expect(postRequestMethod).toHaveBeenCalledTimes(2);
    expect(res).toStrictEqual(mockedValues);
  });
});

describe('Get User Details', () => {
  const mockValues = {
    userName: 'Valid user',
    userEmail: 'validUser@gmail.com',
  };
  test('Request for User Details', async () => {
    const getMethod = jest
      .spyOn(APIMethods, 'get')
      .mockImplementation(
        () =>
          new Promise<{ userName: string; userEmail: string }>((resolve) =>
            resolve(mockValues)
          )
      );
    const res = await getUserDetails(refreshTokenData.client_id);
    expect(getMethod).toHaveBeenCalledTimes(1);
    expect(res).toStrictEqual(mockValues);
  });
});
