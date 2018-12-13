import expect from 'expect';
import combinedReducers from './index';
import userReducer from './userReducer';
import articleReducer from './articleReducer';
import initialState from '../commons/initialStates';

describe('post reducer', () => {
  it('should return the initial state', () => {
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
