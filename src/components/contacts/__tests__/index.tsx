import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from '..';

describe('Contacts', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Contacts lang="en" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Contacts lang="ru" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
