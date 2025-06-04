const { I } = inject();

module.exports = {
  elements: {
    homeBanner: '//img[@alt="Website for automation practice"]',
    loginLink: 'Signup / Login',
    productsLink: 'Products',
  },

  openHomePage() {
    I.amOnPage(process.env.BASE_URL);
    I.seeElement(this.elements.homeBanner);
  },

  goToLoginPage() {
    I.click(this.elements.loginLink);
    I.see('Login to your account');
  },

  goToProductsPage() {
    I.click(this.elements.productsLink);
    I.waitForElement('.product-image-wrapper', 5);
  }
};