/* const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 6000;

// browser.url - navigate to a page/url
// browser.pause - pause execution for a number of ms
// $ - grab an element
// element: click, setValue

Given('that I am logged in and can see the logout button', async () => {
    await browser.url('/');
    await browser.pause(pauseTime);
});


When('I click the logout button', async () => {
    let grab_logout_button = await browser.$('.logout');
    await grab_logout_button.click();
    await browser.pause(pauseTime);
});

Then('I should be loged out', async () => {
    await browser.url('/');
    browser.pause(pauseTime)
}); */