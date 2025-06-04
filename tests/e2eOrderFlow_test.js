require('dotenv').config();

const homePage = require('../pages/homePage');
const loginPage = require('../pages/loginPage');
const productPage = require('../pages/productPage');
const cartPage = require('../pages/cartPage');
const checkoutPage = require('../pages/checkoutPage');

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
});