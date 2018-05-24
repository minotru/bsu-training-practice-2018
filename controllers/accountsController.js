const fs = require('fs');

const filePath = './data/users.json';
const users = JSON.parse(fs.readFileSync(filePath));
const { createHash } = require('crypto');

function hidePrivateFields(user) {
  const hidden = Object.assign({}, user);
  delete hidden.passwordHash;
  delete hidden.email;
  return hidden;
}

module.exports.findUser = function findUser(email, password) {
  const passwordHash = createHash('sha256').update(password).digest('hex');
  const foundUser = users.find(user => user.email === email && user.passwordHash === passwordHash);
  return foundUser ? hidePrivateFields(foundUser) : foundUser;
};

module.exports.findUserById = function (id) {
  const foundUser = users.find(user => user.id === id);
  return foundUser ? hidePrivateFields(foundUser) : foundUser;
};

