import axios from 'axios';

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5300',
});

// http://localhost:5300
// https://anetly.onrender.com
