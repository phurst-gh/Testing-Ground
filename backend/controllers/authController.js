const passport = require("passport");

exports.login = (req, res, next) => {
  console.log("login");
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("1");
      return res
        .status(500)
        .json({ message: `Error with authentication ${message}.` });
    }

    if (!user) {
      console.log("2");
      // User should be attachted, authentication failed
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Auth successful, req.login establishs a session and logs the user in
    req.login(user, (loginErr) => {
      if (loginErr) {
        console.log("3");
        return res
          .status(500)
          .json({ message: `Error with login ${loginErr}.` });
      }

      if (user) {
        console.log("4");
        return res.status(200).json({ user });
      }
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }

    req.session = null;
    res.clearCookie("connect.sid");
    res.status(200);
    res.send();
  });
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ authenticated: true });
  }
  return res.status(401).json({ authenticated: false });
};
