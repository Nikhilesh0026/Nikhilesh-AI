const {test, expect } = require('@playwright/test');
import LoginPage from '../pages/LoginPage';
import DashboarPage from '../pages/DashboardPage';
import CartPage from '../pages/CartPage';
let login, dash, cart;

test.beforeEach(async({page})=>{
    login =  new LoginPage(page);
    dash = new DashboarPage(page);
    cart = new CartPage(page);
})

test("Verify login @Smoke", async()=>{  
    await login.navigateToApplication();
    await login.loginToApplication();
    await dash.verifyLogoIsVisible();
});

test("Enter username @Smoke", async()=>{  
    await login.navigateToApplication();
    await login.enterUsername();
});

test('Add all product into the cart @Regression', async({page})=>{
    await login.navigateToApplication();
    await login.loginToApplication();
    await dash.verifyLogoIsVisible();

    const productNames = await dash.getAllProductName();
    await dash.addAllProductsToCart();
    await dash.clickOnCartIcon();
    await cart.verifyAllProductVisibility(productNames);
 
    
})