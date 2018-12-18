import expect from 'expect';
import combinedReducers from './index';
import userReducer from './userReducer';
import articleReducer from './articleReducer';
import initialState from '../commons/initialStates';
import ratingReducer from './ratingReducer/ratingReducer';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(combinedReducers({}, {})).toEqual(initialState);
  });

  it('should return the initial state for user reducer', () => {
    expect(userReducer(initialState.userReducer, {})).toEqual(initialState.userReducer);
  });

  it('should return the initial state for articles reducer', () => {
    expect(articleReducer(initialState.articleReducer, {})).toEqual(initialState.articleReducer);
  });

  it('should return the initial state for user reducer', () => {
    expect(ratingReducer(initialState.ratingReducer, {})).toEqual(initialState.ratingReducer);
  });
});
