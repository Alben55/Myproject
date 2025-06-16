import axios from 'axios';
import config from '../config/config.js';

const apiClient = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
