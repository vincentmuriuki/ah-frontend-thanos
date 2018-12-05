import expect from 'expect';
import store from './store';
import initialState from './commons/initialStates';

describe('redux store', () => {
  it('contains the initial state', () => {
    expect(store.getState()).toEqual(initialState);
  });
});
