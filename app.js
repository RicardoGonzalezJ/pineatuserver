/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const exsession = require('express-session');
const ConPgSimple = require('connect-pg-simple')(exsession);

const dbcon = require('./config/dbcon/dbcon');

const login = require('./api/login');
const user = require('./api/user');
// const users = require('./routes/users');

const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(exsession({
  store: new ConPgSimple({
    pool: dbcon,
    tableName: 'session',
  }),
  secret: process.env.PORTAL_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000,
    httpOnly: false,
  },

}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/user', user);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
