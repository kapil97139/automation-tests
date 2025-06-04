const { I } = inject();

module.exports = {
  addFirstProductToCart() {
    I.moveCursorTo(locate('.product-image-wrapper').first());
    I.click(locate('a').withText('Add to cart').first());
    I.waitForElement('#cartModal', 5);
    I.click('View Cart');
  }
};