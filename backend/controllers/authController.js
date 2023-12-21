const passport = require('passport');

exports.loginPage = (req, res) => {
  res.send('login page');
};

// passport uses strategies, the local strategy is commonly used for username and password..
// ..authentication. Passport must be configured before using any strategy (handlers/passport.js)..
// ..this local strategy will add the User obj on each request.
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


exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); // They are logged in!
    return;
  }
};

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
};
