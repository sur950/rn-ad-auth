// __tests__ for AuthModal Widget

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header test', () => {
  it(`should match the Header snapshot`, () => {
    const tree = renderer.create(<Header onCancel={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
