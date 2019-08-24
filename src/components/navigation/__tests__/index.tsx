import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '..';

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
              title: 'Example.com',
              href: 'https://example.com',
              lang: 'en',
            },
            {
              title: 'Example.net',
              href: 'https://example.net',
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
