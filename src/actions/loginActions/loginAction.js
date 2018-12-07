import axios from 'axios';
import ACTION_TYPE from '../actionTypes';
import APP_URL from '../../utils/constants';

export const loginSuccess = response => ({
  type: ACTION_TYPE.USER_LOGIN_SUCCESS,
  payload: {
    response,
  },
});
export const loginFailure = errorMessage => ({
  type: ACTION_TYPE.USER_LOGIN_FAILURE,
  errorMessage,
});
export const loginThunk = data => (dispatch) => {
  const userdata = {
    user: {
      ...data,
    },
  };
  return axios.post(`${APP_URL}/users/login`, userdata)
    .then((res) => {
      dispatch(loginSuccess(res.data.results));
    }).catch((error) => {
      dispatch(loginFailure(error.response.data.results.error[0]));
    });
};
export default loginThunk;
