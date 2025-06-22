import 'dotenv/config';

const config = {
  baseURL: process.env.TEST_API_URL,
  registerURL: process.env.REGISTER_API_URL,
  loginURL: process.env.LOGIN_API_URL,
  email: process.env.EMAIL,
  language: process.env.LANGUAGE,
  password: process.env.PASSWORD,
  username: process.env.APP_USERNAME,
  getUserInfoURL: process.env.GETUSERINFO_URL,
  token: process.env.TOKEN,
  getUserAvatar: process.env.GETUSERAVATAR_URL
};

export default config;