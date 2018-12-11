import * as moxios from 'moxios';
import configurestore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import fetchArticlesThunk, {
  fetchArticlesSuccess,
  fetchArticlesFailure,
} from '../articleActions';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

const middlewares = [reduxThunk];
const mockStore = configurestore(middlewares);
let store;
describe('get articles component', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should handel fetchArticlesFailure', () => {
    const errorMessage = 'Check your internet conectivity';
    moxios.stubRequest(
      `${APP_URL}/articles`,
      {
        status: 400,
        response: {
          errors: {
            error: '',
          },
        },
      },
    );
    store.clearActions();
    const expectedActions = [{ errorMessage, type: 'FETCH_ARTICLES_FAILURE' }];
    store.dispatch(fetchArticlesThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should hanlde fetchArticlesSuccess', () => {
    const mockData = {
      results: [
        {
          title: '',
          body: '',
        },
      ],
    };
    moxios.stubRequest(
      `${APP_URL}/articles`,
      {
        status: 200,
        response: mockData,
      },
    );
    store.clearActions();
    const expectedActions = [
      { articles: [{ body: '', title: '' }], type: 'FETCH_ARTICLES_SUCCESS' },
    ];
    store.dispatch(fetchArticlesThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchArticleSucess', () => {
  it('should create an action on successful fetching of all articles', () => {
    const article = {
      title: 'training a dragon',
      body: 'how to train a dragon',
    };
    const expectedAction = {
      type: ACTION_TYPE.FETCH_ARTICLES_SUCCESS,
      articles: article,
    };
    expect(fetchArticlesSuccess(article)).toEqual(expectedAction);
  });
});

describe('fetchArticlesFailure', () => {
  it('should create an action on failure to fetch all articles', () => {
    const msg = 'no internet connection';

    const expectedAction = {
      type: ACTION_TYPE.FETCH_ARTICLES_FAILURE,
      errorMessage: msg,
    };
    expect(fetchArticlesFailure(msg)).toEqual(expectedAction);
  });
});
