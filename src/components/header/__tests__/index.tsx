import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';

import Languages from '../../../constants/languages';

describe('Header', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Header lang={Languages.english} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Header lang={Languages.russian} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add custom about', () => {
    const tree = renderer
      .create(<Header lang={Languages.english} about="Lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
