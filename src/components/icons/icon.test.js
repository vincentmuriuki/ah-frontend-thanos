import React from 'react';
import { shallow } from 'enzyme';
import StarRegular from './StarRegular';
import StarSolid from './StarSolid';

describe('Icons', () => {
  test('renders the component', () => {
    const StarRegularComponent = shallow(
      <StarRegular />,
    );
    expect(StarRegularComponent).toMatchSnapshot();
  });
  test('renders the component', () => {
    const StarSolidComponent = shallow(
      <StarSolid />,
    );
    expect(StarSolidComponent).toMatchSnapshot();
  });
});
