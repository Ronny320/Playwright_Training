import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'; 


const URL = 'https://the-internet.herokuapp.com/login'
let Login: LoginPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    Login = new LoginPage(page);
});

test('test', async ({ page }) => {

   await page.goto(URL);
   await Login.login('tomsmith', 'SuperSecretPassword!')

    
/* 
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  */

});