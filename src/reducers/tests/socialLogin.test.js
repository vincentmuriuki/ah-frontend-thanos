import SocialLoginReducer from '../socialLoginReducer';
import actionTypes from '../../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
};

describe('Social Login Reducer tests', () => {
  test('LOGIN', () => {
    SocialLoginReducer(initialState, { types: actionTypes.SOCIAL_LOGIN });
    const newState = SocialLoginReducer(initialState, { type: actionTypes.LOGIN });
    expect(newState).toEqual({
      isLoggedIn: true,
    });
  });

  test('LOGIN', () => {
    expect(SocialLoginReducer(initialState,
      { type: actionTypes.SOCIAL_LOGIN })).toEqual(initialState);
  });
});
