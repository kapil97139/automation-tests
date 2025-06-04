// Feature('login');

// Scenario('test something',  ({ I }) => {
//     I.amOnPage('https:\\www.google.com');
//     I.see('Google');

// });


Feature('E2E Order Flow');

Scenario('Login, Add Product, Checkout, and Place Order', async ({ I }) => {

  // 1. Visit Homepage
  I.amOnPage('https://automationexercise.com');
  I.seeElement('//img[@alt="Website for automation practice"]');

  // 2. Go to Login Page
  I.click('Signup / Login');
  I.see('Login to your account');

  // 3. Login
  I.fillField('input[data-qa="login-email"]', 'kapil97139@gmail.com');
  I.fillField('input[data-qa="login-password"]', 'kapil7890');
  I.click('button[data-qa="login-button"]');

  I.see('Logged in as'); // Verify login success

  // 4. Add Product to Cart
  I.click('Products');
  I.waitForElement('.product-image-wrapper', 5);
  I.moveCursorTo(locate('.product-image-wrapper').first());
  I.click(locate('a').withText('Add to cart').first());

  I.waitForElement('#cartModal', 5);
  I.click('View Cart');

  // 5. Verify Product in Cart
  I.see('Shopping Cart');
  I.see('Blue Top'); // assuming it's the added product

  // 6. Proceed to Checkout
  I.click('Proceed To Checkout');
  I.see('Address Details');

  // 7. Place Order
  I.fillField('textarea[name="message"]', 'Please deliver ASAP.');
  I.click('Place Order');

  // 8. Fill Payment Details
  I.fillField('//input[@name="name_on_card"]', 'Kapil Rathore');
  I.fillField('//input[@name="card_number"]', '4111111111111111');
  I.fillField('//input[@name="cvc"]', '123');
  I.fillField('//input[@name="expiry_month"]', '12');
  I.fillField('//input[@name="expiry_year"]', '2026');
  I.click('#submit');

  // 9. Verify Order Success
  I.waitForElement('h2', 5);
  I.see('Congratulations! Your order has been confirmed!');
});