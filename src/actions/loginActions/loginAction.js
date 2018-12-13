import axios from 'axios';
import swal from 'sweetalert2';
import ACTION_TYPE from '../actionTypes';
import swalMessages from '../swalAlerts';
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
  swal.showLoading();
  const userdata = {
    user: {
      ...data,
    },
  };
  return axios.post(`${APP_URL}/users/login`, userdata)
    .then((res) => {
      dispatch(loginSuccess(res.data.results));
      localStorage.setItem('token', res.data.results.token);
      localStorage.setItem('username', res.data.results.username);
      swal({ ...swalMessages.LOGIN_SUCCESSFUL, text: `You're logged in as ${res.data.results.username}` });
      window.location.replace('/');
    }).catch((error) => {
      dispatch(loginFailure(error.response.data.results.error[0]));
      swal({ ...swalMessages.LOGIN_ERROR, text: error.response.data.results.error[0] });
    });
};
export default loginThunk;
