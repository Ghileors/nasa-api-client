import axios, { AxiosRequestConfig } from 'axios';
import { setupInterceptorsTo } from './interceptors';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');
  config.headers = {
    Authorization: token || '',
  };
  return config;
};

export const api = setupInterceptorsTo(
  axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_API_URL }),
  onRequest
);
