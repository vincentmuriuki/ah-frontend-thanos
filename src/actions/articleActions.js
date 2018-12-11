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

const fetchArticlesThunk = () => dispatch => axios.get(`${APP_URL}/articles`)
  .then((response) => {
    dispatch(fetchArticlesSuccess(response.data.results));
  })
  .catch(() => {
    dispatch(fetchArticlesFailure('Check your internet conectivity'));
  });

export default fetchArticlesThunk;
