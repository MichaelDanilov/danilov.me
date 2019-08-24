import React from 'react';
import renderer from 'react-test-renderer';
import Main from '..';

describe('Main', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Main lang="en" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Main lang="ru" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
