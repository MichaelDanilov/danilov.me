import React from 'react';
import renderer from 'react-test-renderer';
import PageWrapper from '..';

import Languages from '../../../constants/languages';

describe('PageWrapper', () => {
  it('english version renders correctly', () => {
    const tree = renderer
      .create(
        <PageWrapper lang={Languages.english} meta={{}}>
          <span>Lorem ipsum</span>
        </PageWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('russian version renders correctly', () => {
    const tree = renderer
      .create(
        <PageWrapper lang={Languages.russian} meta={{}}>
          <span>Lorem ipsum</span>
        </PageWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
