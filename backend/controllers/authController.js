const passport = require('passport');

exports.loginPage = (req, res) => {
  res.send('login page');
};

// passport uses strategies, the local strategy is commonly used for username and password..
// ..authentication. Passport must be configured before using any strategy (handlers/passport.js)..
// ..this local strategy will add the User obj on each request.
exports.login = passport.authenticate('local', {
  failureMessage: 'Login failed.',
  successMessage: 'Logged in!'
})

exports.logout = (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated) {
    next();
    return;
  }

  res.json('User not authorised.');
}