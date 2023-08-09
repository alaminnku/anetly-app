import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://anetly.onrender.com',
});
