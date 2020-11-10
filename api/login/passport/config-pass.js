/* eslint-disable consistent-return */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {
  findUserByEmail, userSignup, findUserByID,
} = require('../model');

const option = {
  passReqToCallback: true,
  // usernameField: 'userEmail',
};

const init = require('../../../config/passport/serialize');

// Initialize serializeUser and deserializeUSer functions.
init();

/**
 * LocalStrategy signup:
 * 1. findUserByName: check if user already exists
 *    if yes then it redirect to login endpoint.
 * 2. userSignup: Create the user on db if user does not exists.
 * 3. findUSerByID: retrieve the user data from db to return callback done.
 */
passport.use('local-signup', new LocalStrategy(
  option,
  (req, username, password, done) => {
    process.nextTick(() => {
      // #1
      findUserByEmail(username, (err, user) => {
        if (err) {
          console.log('error: config-passport.js local-signin findUserByName', err);
          return done(err);
        }
        // console.log('user', user[0]);
        if (user[0]) {
          // console.log('this user already exists');
          return done(null, false);
          // return done(null, false, req.flash('message', 'El usuario ya existe.'));
        }
        // #2
        userSignup({
          username,
          password,
        }, (errSignup, dn) => {
          if (errSignup) {
            console.log('error: config-pass.js local-signup userSignup', errSignup);
            return done(errSignup);
          }
          // #3
          findUserByID(dn.insertId, (errID, userData) => {
            if (errID) {
              console.log('error: config-pass.js local-signup findUserByID', errID);
            }
            // console.log('done config-pass.js userSignup', userData[0]);
            return done(null, userData[0]);
          });
        });
      });
    });
  },
));

/**
 * LocalStrategy signin:
 * 1. findUserByEmail: check if user already exists
 *    if yes then it retrieve the user data from db to return callback done.
 * 2. verifyPassword: check if password is correct.
 */
passport.use('local-signin', new LocalStrategy(
  option,
  (req, username, password, done) => {
    // #1
    findUserByEmail(username, (err, user) => {
      if (err) {
        console.log('error: config-passport.js local-signin findUserByEmail', err);
        return done(err);
      }
      if (!user[0]) {
        return done(null, false);
        // return done(null, false, req.flash('message', 'El usuario no existe'));
      }
      if (password !== user[0].password) {
        return done(null, false);
        // return done(null, false, req.flash('message', 'La contraseña es incorrecta'));
      }
      // console.log('this is user config-pass.js local-signin', user[0]);
      return done(null, user[0]);
    });
  },
));

module.exports = passport;
