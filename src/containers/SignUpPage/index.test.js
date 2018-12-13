import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import SignUpPageConnected, { mapDispatchToProps, SignUpPage } from './index';

import ACTION_TYPE from '../../actions/actionTypes';

describe('<SignUpPage />', () => {
  let signUpPageComponent;
  let wrapper;
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const initialState = {
      articleReducer: { article: {} },
      userReducer: {
        freshUser: {
          email: '', password: '', username: '', isLoggedIn: false, loading: true,
        },
      },
    };
    const store = mockStore(initialState);
    signUpPageComponent = shallow(<SignUpPageConnected store={store} />);
  });

  it('should render the component', () => {
    expect(signUpPageComponent).toMatchSnapshot();
  });

  it('should dispatch a method to get user input', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getUserInputs({});
    expect(dispatch.mock.calls[0][0]).toEqual({ payload: {}, type: ACTION_TYPE.GET_USER_INPUT });
    mapDispatchToProps(dispatch).signUpuser({});
  });

  it('should call handle input user method', () => {
    const getUserInputs = jest.fn();
    wrapper = shallow(
      <SignUpPage signUpuser={jest.fn()} freshUser={{}} getUserInputs={getUserInputs} />,
    );
    wrapper.instance().handleUpdateFields({ target: { name: 'username', value: 'rachael' } });
    expect(getUserInputs).toHaveBeenCalled();
  });
});

describe('handle Invoke email for password reset', () => {
  const wrapper = shallow(<SignUpPage />);
  wrapper.setProps({ signUpuser: jest.fn() });
  const fakeEventReturn = { target: { id: 1, value: 'some val' } };
  const fakeEvent = { preventDefault: () => fakeEventReturn };
  const spy = jest.spyOn(wrapper.instance(), 'handleSignUp');
  wrapper.instance().handleSignUp(fakeEvent);
  expect(spy).toHaveBeenCalled();
});
