require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/login.page');
const HomePage = require('./pages/home.page');

test.describe('Страница авторизации', () => {
  test('Успешный логин', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(page).toHaveURL(process.env.BASE_URL);
  });

  test('Неуспешный логин', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('q@q.ru', 'qq');
    await expect(page.locator('div.message.danger')).toBeVisible();
    await expect(page.locator('div.message.danger')).toHaveText('Wrong username or password.');
  });

  test('Переход на страницу создания аккаунта', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.gotocreateaccout();
    await expect(page).toHaveURL(process.env.CREATE_ACCOUNT_URL);
  });

  test('Переход на страницу Забыл пароль', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.gotoforgotpassword();
    await expect(page).toHaveURL(process.env.FORGOT_ACCOUNT_URL);
  });
});

test.describe('Домашняя страница', () => {
  test.describe.configure({ mode: 'serial' });

  test('Добавление задачи', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(page).toHaveURL(process.env.BASE_URL);
    await homePage.createtask();
    await expect(page.locator('a.task-link:has-text("Зарядка")')).toBeVisible();
  });

  test('Отмена выполнения задачи', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(page).toHaveURL(process.env.BASE_URL);
    await expect(page.locator('a.task-link:has-text("Зарядка")')).toBeVisible();
    await homePage.completingtask();
    await expect(
      page.locator('div.notification-content:has-text("Задача отмечена как завершённая")'),
    ).toBeVisible({ timeout: 8000 });
    await homePage.cancelcompletingtask();
    await expect(page.locator('a.task-link:has-text("Зарядка")')).toBeVisible();
  });

  test('Выполнение задачи', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.navigate();
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(page).toHaveURL(process.env.BASE_URL);
    await expect(page.locator('a.task-link:has-text("Зарядка")')).toBeVisible();
    await homePage.completingtask();
    await expect(
      page.locator('div.notification-content:has-text("Задача отмечена как завершённая")'),
    ).toBeVisible({ timeout: 8000 });
  });
});
