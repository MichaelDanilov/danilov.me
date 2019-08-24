import React from 'react';
import renderer from 'react-test-renderer';
import Page from '..';

describe('Page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Page>
          <span>Lorem ipsum</span>
        </Page>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
