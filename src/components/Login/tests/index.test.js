import React from 'react';
import { shallow } from 'enzyme';
import Login from '../index';

it('renders without crashing', () => {
  shallow(<Login onChange={jest.fn()} onSubmit={jest.fn()} />);
});
