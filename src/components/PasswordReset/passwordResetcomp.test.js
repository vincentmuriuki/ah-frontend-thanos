import React from 'react';
import { shallow } from 'enzyme';
import NewPassword from './newPassword';

describe('<NewPassword />', () => {
  let newpasswordComponent;

  beforeEach(() => {
    newpasswordComponent = shallow(<NewPassword onChange={jest.fn()} onSubmit={jest.fn()} />);
  });

  it('renders the component', () => {
    expect(newpasswordComponent).toMatchSnapshot();
  });
});
