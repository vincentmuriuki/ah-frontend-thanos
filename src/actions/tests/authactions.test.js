import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import socialUserLogin from '../userActions';
import ACTION_TYPES from '../actionTypes';
import { SocialLogin } from '../actionCreators';


describe('social auth actions', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
    moxios.install();
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
    const type = [{ type: ACTION_TYPES.SOCIAL_LOGIN, payload: true }];
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
    expect(SocialLogin(user)).toEqual(expect.objectContaining({
      type: ACTION_TYPES.SOCIAL_LOGIN,
    }));
  });
});
