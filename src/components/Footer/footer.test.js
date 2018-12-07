import React from 'react';
import { shallow, mount } from 'enzyme';
import { Footer, CreateImage } from './index';

describe('Footer tests', () => {
  const footer = shallow(<Footer />);
  const createImageFooter = shallow(<CreateImage />);
  const wrapper = mount(<Footer />);
  test('testing footer', () => {
    expect(footer).toMatchSnapshot();
    expect(createImageFooter).toMatchSnapshot();
    expect(wrapper.find('.footer').hasClass('row'));
  });
});
