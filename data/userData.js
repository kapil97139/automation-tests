const { faker } = require('@faker-js/faker');

function generateUserData() {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    day: faker.number.int({ min: 1, max: 28 }).toString(),
    month: faker.date.month(),
    year: faker.number.int({ min: 1970, max: 2005 }).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: 'India',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode() || '123456',
    mobile: '919876543210'            
  };
}

module.exports = { generateUserData };