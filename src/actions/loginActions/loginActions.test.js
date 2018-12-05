import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginSuccess, loginThunk, loginFailure } from './loginAction';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

const mockStore = configureMockStore([thunk]);

describe('Login Actions tests', () => {
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
      payload: { response },
    }));
  });
  test('Failed login action', () => {
    const response = '';
    expect(loginFailure(response)).toEqual(expect.objectContaining({
      type: ACTION_TYPE.USER_LOGIN_FAILURE,
      errorMessage: '',
    }));
  });
  test('Login successfull', () => {
    moxios.stubRequest(`${APP_URL}/users/login`, {
      status: 200,
      responseText: { email: 'jude@gmail.com' },
    });
    const expectedtActions = { type: ACTION_TYPE.USER_LOGIN_SUCCESS };
    const store = mockStore({});
    store.dispatch(loginThunk())
      .then(() => {
        expect(store.getActions()).toEqual(expect.objectContaining(expectedtActions));
      })
      .catch(() => {});
  });
});
