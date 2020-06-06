import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '..';

import Languages from '../../../constants/languages';

describe('Navigation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with some navigation', () => {
    const tree = renderer
      .create(
        <Navigation
          navigation={[
            {
              title: 'English version',
              href: '/en',
              lang: Languages.english,
            },
            {
              title: 'Basic version',
              href: '/',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
