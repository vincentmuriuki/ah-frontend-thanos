import axios from 'axios';
import swal from 'sweetalert2';
import actionTypes from './actionTypes';
import APP_URL from '../utils/constants';
import { SocialLogin, LogIn, socialLoginFailure } from './actionCreators';
import axiosInstance from '../commons/axiosInstance';

export const signupSuccessful = response => ({
  type: actionTypes.USER_REGISTER_SUCCESS,
  payload: response,
});

export const signupFail = response => ({
  type: actionTypes.USER_REGISTER_FAIL,
  payload: response,
});

export const getUserInput = payload => ({
  type: actionTypes.GET_USER_INPUT,
  payload,
});

export const userSignup = freshUser => (dispatch) => {
  swal.showLoading();
  return axios.post(`${APP_URL}/users`, freshUser)
    .then((response) => {
      dispatch(signupSuccessful({
        results: response.data.results,
      }));
    })
    .catch((error) => {
      dispatch(signupFail({
        results: error.response.data.results,
      }));
    });
};


export const socialUserLogin = (url, token) => (dispatch) => {
  dispatch(SocialLogin(true));
  return axiosInstance.post(`${url}/${token}`)
    .then(response => dispatch(LogIn(response.data.results)))
    .catch((error) => {
      dispatch(socialLoginFailure({
        results: error.response,
        status_code: error.response,
      }));
    });
};
export default socialUserLogin;
