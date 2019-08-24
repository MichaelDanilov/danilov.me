import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';

describe('Header', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Header lang="en" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Header lang="ru" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add custom about', () => {
    const tree = renderer
      .create(<Header lang="en" about="Lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
