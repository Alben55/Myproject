class HomePage {
  constructor(page) {
    this.page = page;
  }

  async createtask() {
    await this.page.fill('textarea[placeholder="Добавить задачу…"]', 'Зарядка');
    await this.page.click('button:has-text("Добавить")');
  }

  async completingtask() {
    await this.page.click('svg.fancy-checkbox__icon');
  }

  async cancelcompletingtask() {
    await this.page.click('button:has-text("Отменить")');
  }
}

module.exports = HomePage;
