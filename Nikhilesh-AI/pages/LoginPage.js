const data = require('../data/testData.json');
const { expect } = require("@playwright/test");
export default class LoginPage {

    constructor(page){
        this.page = page;
        this.userNameXpath = "//input[@id='userEmail']";
        this.passwordCss = "#userPassword";
        this.loginButton = "input#login";
    }

    /**
     * This method is used to navigate to browser and will open the url in browser
     */
    async navigateToApplication(){
        await this.page.goto(process.env.DEV_URL);
    }

    /**
     * This method is used to enter email into username field
     */
    async enterUsername() {
        await this.page.fill(this.userNameXpath, data.username)
    }

    async enterPassword() {
         await this.page.fill(this.passwordCss, data.password);
    }

    async clickOnLoginButton() {
        await this.page.locator(this.loginButton).click();
    }

    async loginToApplication() {
        await this.page.fill(this.userNameXpath, data.username)
        await this.page.fill(this.passwordCss, data.password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyCorrectTitle() {
        await expect (this.page).toHaveTitle("Let's Shop");
    }
}