const passport = require('passport');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: `Error with authentication ${message}.`});
    }
  
    if (!user) {
      // User should be attachted, authentication failed
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    // Auth successful, req.login establishs a session and logs the user in
    req.login(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ message: `Error with login ${loginErr}.`});
      }
  
      // Set a custom message in the session (optional)
      req.session.authMessage = 'Authorised';
  
      if (user) {
        console.log('user returned')
        return res.status(200).json({ message: 'Authorised', user });
      }
    })
  })(req, res, next);
}; 

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.log(1);

      return res.status(500).json({ error: 'Failed to log out' });
    }
    req.session.destroy((err) => {
      if (err) {
        console.log(2);
        return res.status(500).json({ error: 'Failed to destroy session' });
      }
      console.log(3);
      res.clearCookie('connect.sid');
      res.send('Logged out');
    });
  });
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ message: 'Authorised' });
  }
  return res.status(401).json({ message: 'Unauthorised' });
};
