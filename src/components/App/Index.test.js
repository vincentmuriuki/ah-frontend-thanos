import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('Home component', () => {
  const nodes = shallow(<App />);
  it('should render without crashing', () => {
    expect(nodes.length).toEqual(1);
  });
});
