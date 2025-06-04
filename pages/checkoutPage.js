const { I } = inject();

module.exports = {
  placeOrder(message = 'Please deliver ASAP.') {
    I.fillField('textarea[name="message"]', message);
    I.click('Place Order');
  },

  fillPaymentDetails({
    name,
    number,
    cvc,
    month,
    year
  }) {
    I.fillField('//input[@name="name_on_card"]', name);
    I.fillField('//input[@name="card_number"]', number);
    I.fillField('//input[@name="cvc"]', cvc);
    I.fillField('//input[@name="expiry_month"]', month);
    I.fillField('//input[@name="expiry_year"]', year);
    I.click('#submit');
  },

  verifyOrderSuccess() {
    I.waitForElement('h2', 5);
    I.see('Congratulations! Your order has been confirmed!');
  }
};