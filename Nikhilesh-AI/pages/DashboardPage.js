const { expect } = require("@playwright/test");

export default class DashboarPage {
  constructor(page) {
    this.page = page;
    this.logo = "//p[normalize-space()='Automation Practice']";
    this.addToCart = "//button[text()=' Add To Cart']";
    this.cartIcon = "//button[@routerlink='/dashboard/cart']";
  }

  async verifyLogoIsVisible() {
    await expect(this.page.locator(this.logo)).toBeVisible();
  }

  async addAllProductsToCart() {
    const addToCartButton = this.page.locator("//button[text()=' Add To Cart']");
    const count = await addToCartButton.count();
    for (let i = 0; i < count; i++) {
      await addToCartButton.nth(i).click();
    }
  }

  async getAllProductName() {
    const products = this.page.locator("//div[@class='card-body']/child::h5//child::b");
    const count = await products.count();
    const productNames = [];
    for(let i = 0; i < count; i++){
      const text = await products.nth(i).textContent();
      productNames.push(text.trim())
    }
    return productNames;
  }

  async clickOnCartIcon() {
    await this.page.locator(this.cartIcon).click();
  }
}
