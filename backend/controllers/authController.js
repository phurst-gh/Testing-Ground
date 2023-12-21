const passport = require('passport');

exports.loginPage = (req, res) => {
  res.send('login page');
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: `Error with authentication ${message}.`});
    }
  
    if (!user) {
      // User should be attachted, authentication failed
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    // Auth successful, use req.login to establish a session and log the user in
    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: `Error with login ${loginErr}.`});
      }
  
      // Set a custom message in the session (optional)
      req.session.authMessage = 'Login successful!';
  
      return res.status(200).json({ message: 'Login successful!'});
    })
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
  res.redirect('/');
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({ message: 'User unauthorized' });
};
