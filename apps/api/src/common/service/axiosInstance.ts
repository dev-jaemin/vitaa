// Axios instance for making API requests
import axios from 'axios';

export const inferenceAxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});
