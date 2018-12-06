import expect from 'expect';
import articleReducer from '../articleReducer';
import ACTION_TYPE from '../../actions/actionTypes';

const InitialState = {
  articles: [],
  errorMessage: '',
};

const mockData = {
  results: [
    {
      title: '',
      body: '',
    },
  ],
};
const errorMessage = 'Check your internet conectivity';

describe('invoke article reducer', () => {
  it('it should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(InitialState);
  });

  it('it should handle FETCH_ARTICLES_SUCCESS', () => {
    expect(
      articleReducer(InitialState, {
        type: ACTION_TYPE.FETCH_ARTICLES_SUCCESS,
        articles: mockData,
      }),
    ).toEqual({
      articles: mockData,
      errorMessage: '',
    });
  });

  it('it should handle FETCH_ARTICLES_FAILURE', () => {
    expect(
      articleReducer(InitialState, {
        type: ACTION_TYPE.FETCH_ARTICLES_FAILURE,
        errorMessage,
      }),
    ).toEqual({
      errorMessage,
      articles: [],
    });
  });
});
