import expect from 'expect';
import combinedReducers from './index';
import USER_REGISTRATION from '../actions/actionTypes';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual({
      article: {}, loginReducer: { errorMessage: '', successMessage: '', user_details: '' }, user: {},
    });
  });

  it('should handle GET_POST_START', () => {
    const startAction = {
      type: USER_REGISTRATION,
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(combinedReducers({}, startAction)).toEqual({ article: {}, loginReducer: { errorMessage: '', successMessage: '', user_details: '' }, user: {} });
  });
});
