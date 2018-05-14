const express = require('express');
const router = require('./routes');
const logger = require('morgan')('dev');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const passport = require('passport');
require('./config/passport')(passport);

const PORT = 8080;
const staticPath = `${__dirname}/client/public`;

const app = express();
// app.use(cookieParser);
app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.use(session({
  secret: 'super-puper-secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.use((req, res) => {
  res.status(404).sendFile(`${staticPath}/error.html`);
});


app.listen(PORT, (err) => {
  if (err) {
    console.log('failed to start server');
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
