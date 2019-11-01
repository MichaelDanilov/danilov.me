import React from 'react';
import renderer from 'react-test-renderer';
import Error from '..';

import Languages from '../../../constants/languages';

describe('Error', () => {
  it('english version renders correctly', () => {
    const tree = renderer.create(<Error lang={Languages.english} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer.create(<Error lang={Languages.russian} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
