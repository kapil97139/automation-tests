const { I } = inject();

module.exports = {
  verifyProductInCart(productName = 'Blue Top') {
    I.see('Shopping Cart');
    I.see(productName);
  },

  proceedToCheckout() {
    I.click('Proceed To Checkout');
    I.see('Address Details');
  }
};