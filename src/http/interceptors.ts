import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type onRequestType = (config: AxiosRequestConfig) => AxiosRequestConfig;

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  // const originalRequest = error.config;
  // if (error.response.status === 401 && error.config && !error.config._isRetry) {
  //   originalRequest._isRetry = true;
  //   try {
  //     const response = await Axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}/refresh`, {
  //       withCredentials: true,
  //     });

  //     localStorage.setItem('token', response.data.accessToken);

  //     return api.request(originalRequest);
  //   } catch (e) {
  //     console.log('User is unauthorized.');
  //   }
  // }
  // throw error;
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
  onRequest: onRequestType
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
