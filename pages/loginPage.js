const { I } = inject();

module.exports = {
  fields: {
    email: 'input[data-qa="login-email"]',
    password: 'input[data-qa="login-password"]',
  },
  buttons: {
    login: 'button[data-qa="login-button"]'
  },

  login(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
    I.see('Logged in as');
  }
};