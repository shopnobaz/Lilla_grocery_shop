const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 5000;

Given('I am on the home page with login button', async () => {
    await browser.url('/');
  });

When('I click on the login button', async () => {
    await browser.click('button=Login');
  });

When('I can see the login form', async () => {
    await browser.waitForExist('form[name="login"]');
    });

When(/^I enter my email as "(.*)"$/, async (email) => {
    await $('[name="email"]').setValue(email);
    expect(await $('[name="email"]')).toHaveValue(email);
    await browser.pause(pauseTime);
  });

When(/^I enter my password as "(.d)"$/, async (password) => {    
    await $('[name="password"]').setValue(password);
    expect(await $('[name="password"]')).toHaveValue(password);
    await browser.pause(pauseTime);
  });

When('I click on the login button', async () => {
    await browser.click('button=Login');
    await browser.pause(pauseTime);
  });

Then('I should see the home page with logout button', async () => {
    await browser.waitForVisible('button=Logout');
    await browser.pause(pauseTime);
  });

    
