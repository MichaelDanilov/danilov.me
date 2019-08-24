import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '..';

describe('Paragraph', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Paragraph
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
