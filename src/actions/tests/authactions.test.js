import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { socialUserLogin } from '../userActions';
import ACTION_TYPES from '../actionTypes';
import { SocialLogin } from '../actionCreators';
import APP_URL from '../../utils/constants';

describe('social auth actions', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  it('should have social login initiated with google', async () => {
    const userData = {
      user: {
        access_token: 'token',
      },
    };
    const type = [{ type: ACTION_TYPES.SOCIAL_LOGIN }];
    socialUserLogin('/api/auth/google/', userData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(type);
  });

  it('LOGIN Action', () => {
    const user = {
      token: 'randomtoken',
      username: 'johndoe',
      email: 'rachael@email.com',
    };
    expect(SocialLogin(user)).toEqual(
      expect.objectContaining({
        type: ACTION_TYPES.SOCIAL_LOGIN,
      }),
    );
  });

  test('social login action passes', () => {
    const token = 'some-token';
    const url = 'google-url';

    moxios.stubRequest(`${APP_URL}/${url}/${token}`, {
      status: 200,
      method: 'post',
      response: {
        results: {
          token,
          username: 'racheal',
        },
      },
    });

    store.dispatch(socialUserLogin(url, token)).then(() => {
      expect(store.getActions()).toEqual([{ type: 'SOCIAL_LOGIN_SUCCESS' }, { type: 'LOGIN' }]);
    });
  });

  test('social login actions fails', () => {
    const token = 'some-token';
    const url = 'google-url';

    moxios.stubRequest(`${APP_URL}/${url}/${token}`, {
      status: 400,
    });

    store.dispatch(socialUserLogin(url, token)).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'SOCIAL_LOGIN_SUCCESS' },
        { type: 'SOCIAL_LOGIN_FAILURE', payload: 'Social Login Failed, Please try again' },
      ]);
    });
  });
});
