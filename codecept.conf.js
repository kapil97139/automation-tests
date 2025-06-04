require('dotenv').config(); // to load env vars

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationexercise.com',
      show: true,
      browser: 'chromium',
    }
  },
  include: {
    I: './steps_file.js',
    // loginPage: './pages/loginPage.js',
    // productPage: './pages/productPage.js',
    // cartPage: './pages/cartPage.js',
    // checkoutPage: './pages/checkoutPage.js',
    // homePage: './pages/homePage.js'
  },
  name: 'codecept-playwright-pom'
};