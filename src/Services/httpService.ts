import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'universal-cookie';

var CancelToken = axios.CancelToken;
export var axiosSource = CancelToken.source();

axios.defaults.baseURL = process.env.REACT_APP_PUBLICK_URL;
axios.defaults.cancelToken = axiosSource.token;

export const Intercept = () => {
  axios.interceptors.request.use(
    function (config: AxiosRequestConfig): AxiosRequestConfig {
      const cookies = new Cookie();
      const token = cookies.get('token');


      config.headers = {
        Accept: 'application/json',
      };

      if (token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // config.withCredentials = true;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res: AxiosResponse): AxiosResponse => {
      return res;
    },
    (error) => {
      if (error.response.status === 401) {
      }
      if (error.response.status === 403) {
      }
      if (error.response.status === 500) {
        //nothing happening here
      }
      return Promise.reject(error);
    }
  );
};
