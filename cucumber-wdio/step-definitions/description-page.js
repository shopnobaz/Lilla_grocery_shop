const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 3000;

Given('I am on the home page with products', async () => {
    await browser.url('/');
  });

When (/^I click on the product title "([^"]*)"$/, async (productName) => {
    let product = await $(`//h3[contains(text(), "${productName}")]`);
    await product.click();
  });

Then ('I should see the product details', async () => {
    let productDetails = await $('.productDetails');
    expect(productDetails).toBeTruthy();
    await browser.pause(pauseTime);
  });