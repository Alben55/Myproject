import config from '../config/config.js';
import apiClient from './apiclient.js';

const LoginService = {
  login(long_token, password, username) {
    return apiClient.post(config.loginURL, { long_token, password, username });
  },
};

export default LoginService;
