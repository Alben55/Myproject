import config from '../config/config.js';
import apiClient from './apiclient.js';

const UserService = {
  getUserInfo() {
    return apiClient.get(config.getUserInfoURL);
  },
  getUserAvatar() {
    return apiClient.get(config.getUserAvatar);
  },
};

export default UserService;
