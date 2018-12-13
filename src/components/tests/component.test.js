import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home';
import Header from '../Header';
import UrlLink from '../link';

describe('>>> Shallow Render REACT COMPONENTS', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
    wrapper = shallow(<Header />);
    wrapper = shallow(<UrlLink />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
