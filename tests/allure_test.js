Feature('Allure Test');

Scenario('Basic Allure Check', async ({ I }) => {
  I.amOnPage('https://automationexercise.com');
  I.see('Automation');
});