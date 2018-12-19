import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';
import {
  getLikeStatusThunk,
  getArticleThunk,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchArticlesThunk,
} from '../articleActions';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

describe('get articles component', () => {
  let store;
  const pageNumber = 1;
  let url;
  let sampleId;

  beforeEach(() => {
    moxios.install();
    sampleId = 1;
    const mockStore = configureMockStore([reduxThunk]);
    store = mockStore({});
    url = `${APP_URL}/articles/${sampleId}`;
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should handle fetchArticlesFailure', () => {
    const errorMessage = 'Check your internet conectivity';
    moxios.stubRequest(
      `${APP_URL}/articles?page=${pageNumber}`,
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
    store.dispatch(fetchArticlesThunk(pageNumber)).catch(() => {
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
      `${APP_URL}/articles?page=${pageNumber}`,
      {
        status: 200,
        response: mockData,
      },
    );
    store.clearActions();
    const expectedActions = [
      { articles: { results: [{ body: '', title: '' }] }, type: 'FETCH_ARTICLES_SUCCESS' },
    ];
    store.dispatch(fetchArticlesThunk(pageNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

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

  it('should create an action on failure to fetch all articles', () => {
    const msg = 'no internet connection';

    const expectedAction = {
      type: ACTION_TYPE.FETCH_ARTICLES_FAILURE,
      errorMessage: msg,
    };
    expect(fetchArticlesFailure(msg)).toEqual(expectedAction);
  });

  test('get article thunk action', () => {
    moxios.stubRequest(url, {
      status: 200,
      responseText: { title: 'Sample Title' },
    });
    const expectedActions = [{ type: ACTION_TYPE.GET_ARTICLE }];
    store.dispatch(getArticleThunk(sampleId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch(() => { });
  });

  test('get article thunk action with error', () => {
    moxios.stubRequest(url, {
      status: 400,
      responseText: {},
    });
    const expectedActions = [{ type: ACTION_TYPE.SHOW_ERROR }];
    store.dispatch(getArticleThunk(sampleId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch(() => { });
  });

  test('get like-status thunk action', () => {
    const likeObj = {
      articleId: sampleId,
      token: 'abcabc',
    };
    moxios.stubRequest(`${url}/like_status`, {
      status: 200,
      responseText: {
        status_code: 200,
        results: [
          {
            id: 9,
            article_title: 'title',
            like_status: 'like',
            article: 1,
            user: {
              id: 1,
              username: 'janedoe',
              email: 'janedoe@gmail.com',
            },
          },
        ],
      },
    });
    const expectedActions = [{ type: ACTION_TYPE.GET_LIKE_STATUS }];
    store.dispatch(getLikeStatusThunk(likeObj))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch(() => { });
  });
});
