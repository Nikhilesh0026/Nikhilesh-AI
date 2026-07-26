const { test, expect } = require('@playwright/test');
const path = require('path');
const readExcel = require('../Utils/ExcelReader');
const users = readExcel(path.join(__dirname, '../data/credentials.xlsx'), 'Sheet1');
import LoginPage from '../pages/LoginPage';
import DashboarPage from '../pages/DashboardPage';
import CartPage from '../pages/CartPage';
let login, dash, cart;

test.beforeEach(async({page})=>{
    login =  new LoginPage(page);
    dash = new DashboarPage(page);
    cart = new CartPage(page);
})

users.forEach(user => {
    test.only(`Login with ${user.Username} - expecting ${user.Expected}`, async ({ page }) => {
        await login.navigateToApplication();
        await login.loginToApplication();
        if (user.Expected.toLowerCase() === 'valid') {
            await expect(page.locator("//p[normalize-space()='Automation Practice']")).toBeVisible();
        } else {
          await expect(page.locator("//div[@id='toast-container']")).toBeVisible();
        }
    });
});