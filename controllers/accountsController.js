const fs = require('fs');

const filePath = './data/users.json';
const users = JSON.parse(fs.readFileSync(filePath));
const { createHash } = require('crypto');

module.exports.findUser = function findUser(email, password) {
  const passwordHash = createHash('sha256').update(password).digest('hex');
  let foundUser = users.find(user => user.email === email && user.passwordHash === passwordHash);
  if (foundUser) {
    foundUser = Object.assign({}, foundUser);
    delete foundUser.email;
    delete foundUser.password;
  }
  return foundUser;
};

module.exports.findUserById = function (id) {
  const foundUser = users.find(user => user.id === id);
  if (foundUser) {
    delete foundUser.email;
    delete foundUser.password;
  }
  return foundUser;
};

