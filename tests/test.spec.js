const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/login.page');

test.describe('Авторизация на Vikunja.io', () => {
    test('Успешный логин', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('Qwerty123@mail.ru', 'Qwerty123');
    });
});