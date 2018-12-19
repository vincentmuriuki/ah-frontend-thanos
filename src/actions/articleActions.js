import axios from 'axios';
import ACTION_TYPE from './actionTypes';
import APP_URL from '../utils/constants';

export const fetchArticlesSuccess = articles => ({
  type: ACTION_TYPE.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const fetchArticlesFailure = errorMessage => ({
  type: ACTION_TYPE.FETCH_ARTICLES_FAILURE,
  errorMessage,
});

export const showErrorAction = payload => ({
  type: ACTION_TYPE.SHOW_ERROR,
  payload, // error message
});


export const fetchArticlesThunk = pageNumber => dispatch => axios.get(`${APP_URL}/articles?page=${pageNumber}`)
  .then((response) => {
    dispatch(fetchArticlesSuccess(response.data));
  })
  .catch((error) => {
    dispatch(fetchArticlesFailure(error.response.data.results));
  });


export const getArticleAction = payload => ({
  type: ACTION_TYPE.GET_ARTICLE,
  payload, // entire article
});

export const getLikeStatusAction = payload => ({
  type: ACTION_TYPE.GET_LIKE_STATUS,
  payload,
});

export const getArticleThunk = articleId => (dispatch) => {
  const url = `${APP_URL}/articles/${articleId}`;
  return axios.get(url)
    .then((response) => {
      dispatch(getArticleAction(response.data.results));
      return response;
    })
    .catch((error) => {
      dispatch(showErrorAction({
        ...alert,
        text: error.response ? error.response.data.results.error : 'Article not found',
      }));
    });
};

export const getLikeStatusThunk = ({ articleId, token }) => (dispatch, getState) => {
  const url = `${APP_URL}/articles/${articleId}/like_status`;
  return axios.get(url, { headers: { Authorization: `Token ${token}` } })
    .then((response) => {
      const obj = response.data.results.filter(
        res => res.user.username === localStorage.getItem('username')
          && res.article === getState().articleReducer.article.id,
      );
      dispatch(getLikeStatusAction(obj));
    })
    .catch(() => { }); // has no like-status
};

export default fetchArticlesThunk;
