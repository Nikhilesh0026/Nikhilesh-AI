const { expect } = require("@playwright/test");

export default class CartPage {
  constructor(page) {
    this.page = page;
  }

  async verifyAllProductVisibility(productNames) {
    for(const product of productNames){
        await expect(this.page.locator(`//h3[text()='${product}']`)).toBeVisible();
    }
  }
}