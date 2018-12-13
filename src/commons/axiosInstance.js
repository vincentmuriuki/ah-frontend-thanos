import axios from 'axios';

const baseURL = 'https://ah-backend-thanos-stagin-pr-48.herokuapp.com/';
const timeout = 60000;
const token = localStorage.getItem('token');
const headers = token
  ? {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  } : {
    'Content-Type': 'application/json',
  };
const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});
export default axiosInstance;
