import React from 'react';
import { shallow } from 'enzyme';
import { SocialLogin } from '../socialLogin';

describe('facebooklogin component', () => {
  let wrapper;
  const props = {
    isLoggedIn: true,
    socialAction: jest.fn(),
  };
  const data = { accessToken: 'randomtoken' };
  beforeEach(() => {
    wrapper = shallow(<SocialLogin {...props} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set redirect to true when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.state().redirect).toBe(true);
  });
  it('redirects to home when user exists', () => {
    wrapper.setProps({ user: true });
    expect(wrapper.instance().props.user).toBe(true);
  });
  describe('handleSocialResponse', () => {
    it('should call login method when a response is passed', () => {
      const spy = jest.spyOn(wrapper.instance(), 'login');
      const response = {
        tokenId: 'token',
      };
      wrapper.instance().handleFacebookResponse(response);
      expect(spy).toBeCalled();
    });
    it('returns undefined when google returns an invalid access token', () => {
      expect(wrapper.instance().handleGoogleResponse(data)).toBeUndefined();
    });
  });
});
