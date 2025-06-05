require('dotenv').config();

const homePage = require('../pages/homePage');
const loginPage = require('../pages/loginPage');
const productPage = require('../pages/productPage');
const cartPage = require('../pages/cartPage');
const checkoutPage = require('../pages/checkoutPage');
const contactPage = require('../pages/contactPage');
const signUpPage = require('../pages/signUpPage');
const { generateContactData } = require('../data/contactData');
const { generateUserData } = require('../data/userData');

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

Scenario('Fill and submit Contact Us form with random data', async ({ I }) => {
  const contactData = generateContactData();

  // Then go to contact page
  I.amOnPage('/');
  await contactPage.openContactUs();

  // Fill and submit form
  await contactPage.fillContactForm(contactData);
  await contactPage.submitForm();
  await contactPage.verifySuccess();
});

Scenario('User signs up and logs in with the same credentials @signup', () => {
  const user = generateUserData(); // generate random data

  // ---- SIGN UP FLOW ----
  signUpPage.openSignUpPage();
  signUpPage.fillInitialSignUpForm({ name: user.name, email: user.email });
  
  signUpPage.fillAccountInformation(user);

  // ---- VERIFY ACCOUNT CREATED ----
   homePage.verifyAccountCreated();
});