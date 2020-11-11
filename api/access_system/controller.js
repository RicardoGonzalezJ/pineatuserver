const passport = require('./passport/config-pass');

const { deleteSession } = require('./model');

exports.renderLogin = (req, res) => {
  res.render('login.ejs');
};

exports.signin = (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  passport.authenticate('local-signin', (err, user, _info) => {
    if (err) {
      console.log('error: accesssystem controllers.js', err);
      return next(err);
    }
    if (!user) {
      return res.redirect('/accesssytem');
    }
    req.logIn(user, (logInErr) => {
      if (logInErr) {
        console.log('error on accesssystem controller.js post /login logInErr', logInErr);
        return logInErr;
      }
      return req.session.save(() => res.redirect('/user'));
    });
    return true;
  })(req, res, next);
};

exports.signup = (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  passport.authenticate('local-signup', (err, user, _info) => {
    if (err) {
      console.log('error: accesssystem controllers.js signup', err);
      return next(err);
    }
    if (!user) {
      return res.redirect('/accesssytem');
    }
    req.logIn(user, (logInErr) => {
      if (logInErr) {
        console.log('error on accesssystem controller.js post signup', logInErr);
        return logInErr;
      }
      return req.session.save(() => res.redirect('/user'));
    });
    return true;
  })(req, res, next);
};

// Function to logout from app destroying session on databases
exports.logout = (req, res) => {
  req.session.destroy(() => {
    deleteSession(req.sessionID, (err) => {
      if (err) {
        console.log('err deleteSession accesssystem controllers.js', err);
        throw err;
      } else {
        res.redirect('/accesssystem');
      }
    });
  });
};
