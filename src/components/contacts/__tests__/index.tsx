import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from '..';

import Languages from '../../../constants/languages';

describe('Contacts', () => {
  it('english version renders correctly', () => {
    const tree = renderer
      .create(<Contacts lang={Languages.english} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer
      .create(<Contacts lang={Languages.russian} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
