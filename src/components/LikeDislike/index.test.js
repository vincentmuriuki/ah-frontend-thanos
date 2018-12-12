import React from 'react';
import { shallow } from 'enzyme';
import LikeDislike from '.';

describe('<LikeDislike />', () => {
  it('renders component', () => {
    const wrapper = shallow(
      <LikeDislike onLikeDislike={jest.fn()} likes={0} dislikes={0} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should default likes/dislikes to 0 if state makes it less than zero', () => {
    const wrapper = shallow(
      <LikeDislike onLikeDislike={jest.fn()} likes={-1} dislikes={-1} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
