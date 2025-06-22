import config from '../config/config.js';
import LoginService from '../Services/LoginService';
import RegisterService from '../Services/RegisterService';
import UserService from '../Services/UserService.js';

describe('Register and Auth', () => {
  it('Register', async () => {
    const response = await RegisterService.register(
      config.email,
      config.language,
      config.password,
      config.username
    );
    expect(response.status).toBe(200);
  });

  it('Login', async () => {
    const response = await LoginService.login(
        long_token = true,
        config.password,
        config.username
    );
    expect(response.status).toBe(200);
  })
});

describe('User', () => {
  it('Get user info', async () => {
    const response = await UserService.getUserInfo();
    expect(response.status).toBe(200);
  });
  
  it('Get user avatar', async () => {
    const response = await UserService.getUserAvatar();
    expect(response.status).toBe(200);
  })
});