require('dotenv').config(); // Load env variables

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
    loginPage: './pages/loginPage.js',
    productPage: './pages/productPage.js',
    cartPage: './pages/cartPage.js',
    checkoutPage: './pages/checkoutPage.js',
    homePage: './pages/homePage.js',
    contactPage: './pages/contactPage.js'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure-results',
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    }
  },
  name: 'codecept-playwright-pom'
};