import React from 'react';
import renderer from 'react-test-renderer';
import Main from '..';

import Languages from '../../../constants/languages';

describe('Main', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Main lang={Languages.english} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Main lang={Languages.russian} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
