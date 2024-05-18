// Axios instance for making API requests
import axios from 'axios';

export const inferenceAxiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:8504',
});
