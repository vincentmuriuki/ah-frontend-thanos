import expect from 'expect';
import combinedReducers from '../index';
import userReducer from '../userReducer';
import articleReducer from '../articleReducer';
import ACTION_TYPES from '../../actions/actionTypes';
import initialState from '../../commons/initialStates';

describe('post reducer', () => {
  it('should returns the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state for user reducer', () => {
    expect(userReducer(undefined, {})).toEqual(initialState.userReducer);
  });

  it('should return the initial state for articles reducer', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState.articleReducer);
  });
});

describe('socialLoginReducer', () => {
  it('it should have a default state', () => {
    expect(userReducer(undefined, { type: 'unexpected' })).toEqual(initialState.userReducer);
  });
  it('should state on LOGIN action', () => {
    expect(
      userReducer(undefined, {
        type: ACTION_TYPES.LOGIN,
        payload: true,
      }),
    ).toEqual({
      freshUser: {
        email: '', password: '', username: '',
      },
    });
  });
});
