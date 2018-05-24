const JsonStrategy = require('passport-json').Strategy;
const accountsController = require('../controllers/accountsController');

function serializeUser(user, done) {
  return done(null, user.id);
}

function deserializeUser(id, done) {
  return done(null, accountsController.findUserById(id));
}

function configure(passport) {
  passport.serializeUser(serializeUser);

  passport.deserializeUser(deserializeUser);

  passport.use(new JsonStrategy(
    { usernameProp: 'email' },
    (email, password, done) => {
      const user = accountsController.findUser(email, password);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    },
  ));
}

module.exports = configure;

