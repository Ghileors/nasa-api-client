import axios, { AxiosRequestConfig } from 'axios';
import { setupInterceptorsTo } from './interceptors';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.params = {
    api_key: process.env.REACT_APP_NASA_API_KEY,
  };
  return config;
};

export const nasaApi = setupInterceptorsTo(
  axios.create({ baseURL: process.env.REACT_APP_NASA_API_URL }),
  onRequest
);
