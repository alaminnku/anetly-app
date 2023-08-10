import axios from 'axios';

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://anetly.onrender.com',
});
