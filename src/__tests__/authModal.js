// __tests__ for AuthModal Widget

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AuthModal from '../screens/AuthModal';

describe('Authview test', () => {
  const config = {
    tenant_id: 'e38a8b10-6073-4eb0-93bf-8b729e9ef139',
    client_id: '5a19138e-1cf2-4127-bb31-9fffedcea6fb',
    scope: 'openid',
  };

  const onSuccess = (response) => {
    console.log('response', response);
  };

  const onFailure = (error) => {
    console.error('error', error);
  };

  const onClose = () => {
    console.log('onClose received');
  };

  it(`should match the AuthModal snapshot`, () => {
    const tree = renderer
      .create(
        <AuthModal
          config={config}
          action={'login'}
          open={true}
          onClose={onClose}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
