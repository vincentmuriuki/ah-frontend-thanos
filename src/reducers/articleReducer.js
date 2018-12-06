import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  articles: [],
  errorMessage: '',
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_ARTICLES_SUCCESS:
      return { ...state, articles: action.articles };

    case ACTION_TYPE.FETCH_ARTICLES_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};

export default articleReducer;
