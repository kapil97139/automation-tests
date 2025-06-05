require('dotenv').config();

const homePage = require('../pages/homePage');
const loginPage = require('../pages/loginPage');
const productPage = require('../pages/productPage');
const cartPage = require('../pages/cartPage');
const checkoutPage = require('../pages/checkoutPage');
const contactPage = require('../pages/contactPage');
const { generateContactData } = require('../data/contactData');

Feature('E2E Order Flow');

Scenario('Login, Add Product, Checkout, and Place Order', async ({ I }) => {

  // Visit and Login
  homePage.openHomePage();
  homePage.goToLoginPage();
  loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);

  // Add Product
  homePage.goToProductsPage();
  productPage.addFirstProductToCart();

  // Cart
  cartPage.verifyProductInCart();
  cartPage.proceedToCheckout();

  // Checkout and Payment
  checkoutPage.placeOrder();
  checkoutPage.fillPaymentDetails({
    name: process.env.CARD_NAME,
    number: process.env.CARD_NUMBER,
    cvc: process.env.CARD_CVC,
    month: process.env.CARD_EXP_MONTH,
    year: process.env.CARD_EXP_YEAR
  });

  checkoutPage.verifyOrderSuccess();
  checkoutPage.logoutAccount();
});

//Feature('E2E Order Flow with Contact Us');

Scenario('Fill and submit Contact Us form with random data', async ({ I,}) => {
  const contactData = generateContactData();

  // // Login first
  // await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  // I.see('Logged in as'); // Verification

  // Then go to contact page
  I.amOnPage('/');
  await contactPage.openContactUs();

  // Fill and submit form
  await contactPage.fillContactForm(contactData);
  await contactPage.submitForm();
  await contactPage.verifySuccess();
});

Scenario('Submit form with invalid email', async ({ I }) => {
  const contactData = generateContactData();
  I.amOnPage('/');
  await contactPage.submitFormWithInvalidEmail(contactData);

  I.see('Home  Products Cart Signup / Login Test Cases API Testing Video Tutorials Contact us CONTACT US Note: Below contact form is for testing purpose. GET IN TOUCH FEEDBACK FOR US We really appreciate your response to our website. Kindly share your feedback with us at feedback@automationexercise.com. If you have any suggestion areas or improvements, do let us know. We will definitely work on it. Thank you SUBSCRIPTION Get the most recent updates from our site and be updated your self... Copyright © 2021 All rights reserved'); // adjust text as per UI
});
