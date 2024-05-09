import axios, { AxiosRequestHeaders } from 'axios';
import { getEnvVariables } from '../helpers';

interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
  'Authorization': string;
};

const { VITE_API_URL } = getEnvVariables();

const Api = axios.create({
  baseURL: VITE_API_URL,
});

Api.interceptors
  .request.use((config) => {
    config.headers = {
      ...config.headers,
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    } as CustomAxiosRequestHeaders;
  return config;
});

export default Api;
