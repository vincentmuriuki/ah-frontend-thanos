import ACTION_TYPES from './actionTypes';

export const SocialLogin = response => ({
  type: ACTION_TYPES.SOCIAL_LOGIN,
  payload: response,
});
export const LogIn = payload => ({
  type: ACTION_TYPES.LOGIN,
  payload,
});
export const socialLoginFailure = response => ({
  type: ACTION_TYPES.SOCIAL_LOGIN_FAILURE,
  payload: response,
});
export const testt = () => ({
  type: ACTION_TYPES.TEST,
  payload: 'test',
});
