const { faker } = require('@faker-js/faker');

function generateContactData() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    subject: faker.lorem.words(3),
    message: faker.lorem.sentences(2),
    // filePath can be static or dynamic based on your test files
    filePath: 'tests/files/sample.pdf'
  };
}

module.exports = { generateContactData };