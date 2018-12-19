import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginSuccess, loginThunk, loginFailure } from './loginAction';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

const expectedtActionsLogin = [{
  payload: { response: undefined },
  type: ACTION_TYPE.USER_LOGIN_SUCCESS,
}];

describe('Login Actions tests', () => {
  const mockStore = configureMockStore([thunk]);
  const loginSuccessData = {
    status: 200,
    responseText: { email: 'jude@gmail.com' },
  };
  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install();
  });
  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });
  test('Successful login action', () => {
    const response = 'jude@example.com';
    expect(loginSuccess(response)).toEqual(expect.objectContaining({
      type: ACTION_TYPE.USER_LOGIN_SUCCESS,
      payload: { response: 'jude@example.com' },
    }));
  });
  test('Failed login action', () => {
    const response = '';
    expect(loginFailure(response)).toEqual(expect.objectContaining({
      type: ACTION_TYPE.USER_LOGIN_FAILURE,
      errorMessage: '',
    }));
  });
  const returnExpect = (store, expectedtActions) => (
    store.dispatch(loginThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedtActions));
    })
  );
  test('Login successfull', () => {
    moxios.stubRequest(`${APP_URL}/users/login`, loginSuccessData);
    const store = mockStore({});
    returnExpect(store, expectedtActionsLogin);
  });
  test('Login failed', () => {
    moxios.stubRequest(`${APP_URL}/users/login`, {
      status: 400,
      response: { error: 'Not found' },
    });
    const store = mockStore({});
    returnExpect(store, expectedtActionsLogin);
  });
  test('Login unsuccessfull', () => {
    moxios.stubRequest(`${APP_URL}/users/login`, {
      status: 400,
      errors: {
        results: { errors: ['Some error here'] },
      },
    });
    const store = mockStore({});
    store.dispatch(loginThunk()).catch(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        { type: ACTION_TYPE.USER_LOGIN_FAILURE },
      ));
    });
  });
});
