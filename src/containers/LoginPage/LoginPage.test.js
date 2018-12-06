import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../components/Login';
import LoginPage from './index';

const mockStore = configureMockStore([thunk]);
let store;

const props = {
  signUp: jest.fn(),
  signupData: {
    errors: {
      password: ['Wrong password'],
    },
  },
};

describe('<Login />', () => {
  test('renders the component', () => {
    const LoginComponent = shallow(<Login onChange={jest.fn()} onSubmit={jest.fn()} />);
    expect(LoginComponent).toMatchSnapshot();
  });
});

describe('tesing login container', () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      LoginReducer: {
        errors: {
          email: ['The email not valid'],
          password: ['Wrong password'],
        },
      },
    });
  });
  it('should mount view all component', () => {
    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage props={props} loginUser={jest.fn} />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find('Login').length).toBe(1);
  });
});

describe('handle Invoke email for password reset', () => {
  let component;
  store = mockStore({});
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>,
    );
  });

  it('should submit user email and password without fail', () => {
    component
      .find('input#email')
      .simulate('change', { target: { name: 'email', value: 'ewrfg' } });
    component
      .find('input#email')
      .simulate('change', { target: { name: 'email', value: '' } });
    component
      .find('input#password')
      .simulate('change', { target: { name: 'password', value: '' } });
    component
      .find('input#password')
      .simulate('change', { target: { name: 'password', value: 'sdfg@dfg' } });

    component.find('form').simulate('submit');
  });
});
