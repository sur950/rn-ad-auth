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
  },

  // Required Get Token Params which needs to be sent same everytime
  DEFAULT_GET_TOKEN_PARAMS: {
    scope: 'User.Read',
    grant_type: 'authorization_code',
    client_assertion_type:
      'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
  },
};
