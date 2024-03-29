import axios, { AxiosRequestHeaders } from 'axios';
import { getEnvVariables } from '../helpers';

interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
  'x-token': string;
};

const { VITE_API_URL } = getEnvVariables();

const Api = axios.create({
  baseURL: VITE_API_URL,
});

Api.interceptors
  .request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  } as CustomAxiosRequestHeaders;
  return config;
});

export default Api;
