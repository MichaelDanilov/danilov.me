import React from 'react';
import renderer from 'react-test-renderer';
import PageWrapper from '..';

describe('PageWrapper', () => {
  it('english version renders correctly', () => {
    const tree = renderer
      .create(
        <PageWrapper lang="en" meta={{}}>
          <span>Lorem ipsum</span>
        </PageWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer
      .create(
        <PageWrapper lang="ru" meta={{}}>
          <span>Lorem ipsum</span>
        </PageWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
