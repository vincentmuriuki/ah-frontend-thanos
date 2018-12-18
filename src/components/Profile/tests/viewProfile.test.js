import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ProfileConnected from '../../../containers/profiles/profiles';

describe('Profile component', () => {
  let wrapper;
  const mockStore = configureMockStore();
  const getProfileAction = jest.fn();
  const nextProps = {
    isLoggedIn: true,
    profilePayload: { first_name: 'rachael', last_name: 'Zeus', bio: 'this is my bio' },
  };
  const props = {
    history: { push: jest.fn() },
  };
  const match = {
    params: { username: 'rachaelminani' },
  };
  beforeEach(() => {
    const store = mockStore({});
    wrapper = shallow(
      <Provider store={store}>
        <ProfileConnected
          {...props}
          getProfileAction={getProfileAction}

          match={match}
        />
      </Provider>,
    );
    wrapper.setState({});
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not redirect if isLoggedIn is false', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledTimes(0);
  });
});
