import React from 'react';
import { shallow, mount } from 'enzyme';
import { Footer, CreateImage } from './index';

describe('Footer tests', () => {
  test('testing footer', () => {
    const footer = shallow(
      <Footer />,
    );
    expect(footer).toMatchSnapshot();
  });

  test('testing create image', () => {
    const createImageFooter = shallow(
      <CreateImage />,
    );
    expect(createImageFooter).toMatchSnapshot();
  });
  test('testing div', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('.footer').hasClass('.row'));
  });
});
