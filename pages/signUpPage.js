const { I } = inject();

module.exports = {
  fields: {
    signUpName: 'input[data-qa="signup-name"]',
    signUpEmail: 'input[data-qa="signup-email"]',
    signUpButton: 'button[data-qa="signup-button"]',

    titleMr: '#id_gender1',
    titleMrs: '#id_gender2',
    password: '#password',
    day: '#days',
    month: '#months',
    year: '#years',

    firstName: '#first_name',
    lastName: '#last_name',
    company: '#company',
    address1: '#address1',
    address2: '#address2',
    country: '#country',
    state: '#state',
    city: '#city',
    zipCode: '//input[@id="zipcode"]',
    mobileNumber: '//input[@id="mobile_number"]',

    createAccountButton: 'button[data-qa="create-account"]',
  },

  openSignUpPage() {
    I.amOnPage('/');
    I.click('Signup / Login');
  },

  fillInitialSignUpForm({ name, email }) {
    I.fillField(this.fields.signUpName, name);
    I.fillField(this.fields.signUpEmail, email);
    I.click(this.fields.signUpButton);
  },

  fillAccountInformation(user) {
    I.click(user.gender === 'Mr' ? this.fields.titleMr : this.fields.titleMrs);
    I.fillField(this.fields.password, user.password);
    I.selectOption(this.fields.day, user.day);
    I.selectOption(this.fields.month, user.month);
    I.selectOption(this.fields.year, user.year);

    I.fillField(this.fields.firstName, user.firstName);
    I.fillField(this.fields.lastName, user.lastName);
    I.fillField(this.fields.company, user.company);
    I.fillField(this.fields.address1, user.address1);
    I.fillField(this.fields.address2, user.address2);
    I.selectOption(this.fields.country, user.country);
    I.fillField(this.fields.state, user.state);
    I.fillField(this.fields.city, user.city);
    // I.fillField(this.fields.zipCode, user.zipCode);
    // I.fillField(this.fields.mobileNumber, user.mobileNumber);

    I.click(this.fields.createAccountButton);
  }
};