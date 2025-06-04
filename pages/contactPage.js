const { I } = inject();

module.exports = {
  locators: {
    contactUsL: ' //a[contains(text(), "Contact us")]', // Link to open Contact Us page
    contactUsV: '//h2[contains(text(),"Get In Touch")]', // Verify Contact Us page by heading

    name: '//input[@name="name"]',
    email: '//input[@name="email"]',
    subject: '//input[@name="subject"]',
    message: '//textarea[@name="message"]',
    chooseFile: '//input[@type="file"]',
    submit: '//input[@type="submit"]',
    successMessage: '//div[contains(text(),"Success! Your details have been submitted successfully.")]'
  },

  openContactUs() {
    I.click(this.locators.contactUsL);
    I.waitForElement(this.locators.contactUsV, 5);
    I.seeElement(this.locators.contactUsV);
  },

  fillContactForm({ name, email, subject, message, filePath }) {
    I.fillField(this.locators.name, name);
    I.fillField(this.locators.email, email);
    I.fillField(this.locators.subject, subject);
    I.fillField(this.locators.message, message);

    if (filePath) {
      I.attachFile(this.locators.chooseFile, filePath);
    }
  },

  submitForm() {
    I.click(this.locators.submit);
  },

  verifySuccess() {
    I.waitForElement(this.locators.successMessage, 5);
    I.see('Success! Your details have been submitted successfully.');
  }
};