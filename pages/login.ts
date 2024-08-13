import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage{

    readonly page:Page;
    readonly username_textbox: Locator;
    readonly password_textbox: Locator;
    readonly login_button: Locator;

    

    constructor(page: Page){

        this.page = page;
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

     }

} 

    