import expect from 'expect';
import store from './store';

describe('redux store', () => {
  it('contains the initial state', () => {
    expect(store.getState()).toEqual({ article: {}, loginReducer: { errorMessage: '', successMessage: '', user_details: '' }, user: {} });
  });
});
