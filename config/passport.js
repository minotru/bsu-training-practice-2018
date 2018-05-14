const JsonStrategy = require('passport-json').Strategy;
const accountsController = require('../controllers/accountsController');

function configure(passport) {
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => done(null, accountsController.findUserById(id)));

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

