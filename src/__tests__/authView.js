// __tests__ for AuthView Component

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AuthView from '../screens/AuthView';

const authViewProps = {
  config: {
    tenant_id: 'xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
    client_id: 'xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
    scope: 'openid',
  },
  action: 'login',
  onSuccess: () => {},
  onClose: () => {},
  closeModal: () => {},
};

describe('Authview test', () => {
  it(`should match the AuthView snapshot`, () => {
    const tree = renderer
      .create(<AuthView {...authViewProps} closeModal={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
