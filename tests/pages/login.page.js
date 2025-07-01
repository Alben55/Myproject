class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://try.vikunja.io/login');
    }

    async login(email, password) {
        await this.page.fill('input[name="username"]', email);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="button"]');
    }
}

module.exports = LoginPage;