export default {
  //Base Urls
  CLIENT_URL: 'https://login.microsoftonline.com',
  GRAPH_ME: 'https://graph.microsoft.com/v1.0/me',

  // Required Login Params which needs to be sent same everytime
  DEFAULT_LOGIN_PARAMS: {
    response_type: 'code',
    response_mode: 'query',
    state: '12345',
    nonce: '678910',
    redirect_uri: 'https://azure-ad-login-3606b.web.app/',
  },

  // Required Get Token Params which needs to be sent same everytime
  DEFAULT_GET_TOKEN_PARAMS: {
    scope: 'User.Read',
    grant_type: 'authorization_code',
    redirect_uri: 'https://azure-ad-login-3606b.web.app/',
    client_assertion_type:
      'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
  },
};
