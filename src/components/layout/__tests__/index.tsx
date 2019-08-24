import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '..';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout>
          <span>Lorem ipsum</span>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
