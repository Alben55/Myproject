import config from '../config/config.js';
import apiClient from './apiclient.js';

const RegisterService = {
  register(email, language, password, username) {
    return apiClient.post(config.registerURL, { email, language, password, username });
  },
};

export default RegisterService;
