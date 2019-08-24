import React from 'react';
import renderer from 'react-test-renderer';
import Error from '..';

describe('Error', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Error lang="en" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Error lang="ru" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
