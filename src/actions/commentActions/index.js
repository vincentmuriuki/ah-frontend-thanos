import axios from 'axios';
import action from './actionTypes';
import APP_URL from '../../utils/constants';

export const allCommentsSuccessful = data => ({
  type: action.GET_ALL_COMMENTS_SUCCESSFUL,
  payload: data,
});

export const allCommentsFail = data => ({
  type: action.GET_ALL_COMMENTS_FAIL,
  payload: data,
});

export const CommentInput = data => ({
  type: action.NEW_COMMENT_DATA,
  payload: data,
});

export const postCommentSuccessful = data => ({
  type: action.POST_COMMENT_SUCCESSFUL,
  payload: data,
});

export const postCommentFail = data => ({
  type: action.POST_COMMENT_FAIL,
  payload: data,
});

export const AllComments = articleId => (dispatch) => {
  const url = `${APP_URL}/articles/${articleId}/comments`;
  return axios.get(url)
    .then((response) => { dispatch(allCommentsSuccessful(response.data)); })
    .catch((error) => { dispatch(allCommentsFail(error.response)); });
};

export const PostComment = (articleId, data) => (dispatch) => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const url = `${APP_URL}/articles/${articleId}/comments`;
  return axios.post(url, data, headers)
    .then((response) => { dispatch(postCommentSuccessful(response.data.results)); })
    .catch((error) => {
      dispatch(postCommentFail(error.response.data));
    });
};
