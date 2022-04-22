const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 3000;

// browser.url - navigate to a page/url
// browser.pause - pause execution for a number of ms
// $ - grab an element
// element: click, setValue

Given('that I can see the login form', async () => {
    await browser.url('/');
});

When(/^I fill in the form with "(.*)" and "(.*)"$/, async (text) => {
    let singleProduct = await $('#i101 h3');
    await singleProduct.click();
});
