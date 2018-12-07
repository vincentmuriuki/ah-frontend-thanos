import axios from 'axios';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

export const ratingSuccess = rate => ({
  type: ACTION_TYPE.GET_RATING_SUCCESS,
  payload: rate,
});

export const fetchRatingThunk = articleId => dispatch => axios.get(`${APP_URL}/articles/${articleId}`)
  .then((response) => {
    dispatch(ratingSuccess(response.data.results));
  });

export const postRatingSuccess = rate => ({
  type: ACTION_TYPE.POST_RATING_SUCCESS,
  payload: rate,
});

export const postRatingFailed = errorMessage => ({
  type: ACTION_TYPE.POST_RATING_FAILED,
  payload: errorMessage,
});

export const postRatingData = rate => ({
  type: ACTION_TYPE.POST_RATING_DATA,
  payload: rate,
});

const tok = localStorage.getItem('token');
export const postRating = (articleId, data) => (dispatch) => {
  const url = `${APP_URL}/articles/${articleId}/rating`;
  const token = `Token ${tok}`;
  const headers = {
    headers: { Authorization: token },
  };
  return axios.post(url, data, headers)
    .then((response) => {
      dispatch(postRatingSuccess(response.data));
    })
    .catch((error) => {
      dispatch(postRatingFailed(error.response.data.results.error));
    });
};
