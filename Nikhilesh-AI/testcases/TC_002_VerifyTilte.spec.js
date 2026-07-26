const {test, expect } = require('@playwright/test');
import LoginPage from '../pages/LoginPage';
let login;

test.beforeEach(async({page})=>{
    login =  new LoginPage(page);
})

test("Verify tiltle @Smoke", async()=>{  
    await login.navigateToApplication();
    await login.verifyCorrectTitle();
});