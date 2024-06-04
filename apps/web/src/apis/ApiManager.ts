import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

const ApiManager = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  withCredentials: true,
  timeout: 100000,
  headers: { 'Content-Type': 'application/json' },
});

ApiManager.interceptors.request.use(async config => {
  return config;
});

export default ApiManager;
