import axios from 'axios';
import { getProfile, getProfileError, editProfile } from './actionCreators';

export const getProfileAction = ({ username, token }) => (dispatch) => {
  axios.defaults.headers.common.Authorization = `Token ${token}`;
  return axios.get(`https://ah-backend-thanos-staging.herokuapp.com/api/profiles/${username}`, token)
    .then(response => dispatch(getProfile(response.data.results)))
    .catch(error => (
      dispatch(getProfileError({
        results: error.response.data.results,
        status_code: error.response.status,
      }))));
};

export const editProfileAction = (token, username, userProfile) => (dispatch) => {
  const profile = { profiles: userProfile };
  axios.defaults.headers.common.Authorization = `Token ${token}`;
  return axios.put(`https://ah-backend-thanos-staging.herokuapp.com/api/profiles/${username}`, profile)
    .then(response => dispatch(editProfile(response.data.results)))
    .catch((error) => {
      dispatch(getProfileError({
        results: error.response.data,
        status_code: error.response.status,
      }));
    });
};
