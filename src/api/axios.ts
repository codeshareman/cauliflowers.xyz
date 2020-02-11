import axios from 'axios';

const baseURL = 'http://192.168.1.13:3000/';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  // withCredentials: true,
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Promise.reject(err);
  },
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    Promise.reject(err);
  },
);

export default instance;
