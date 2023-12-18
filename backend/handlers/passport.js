const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// createStrategy() is provided by passport-local-mongoose and is responsible for the setup of the LocalStrategy
passport.use(User.createStrategy());

// User.de/serializeUser() is provided by passport-local-mongoose (User.js) that returns a de/serialization func
// passport.serializeUser() expects a serialization function as an argument
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serialization:
// During the login process, Passport.js serializes the user object, typically by extracting a unique identifier (such as the user ID) from the user object.
// The serialized user data is then stored in the session.

// Deserialization:
// On subsequent requests, when the user makes a request and includes the session identifier (usually stored in a cookie), Passport.js needs to "deserialize" the user.
// The deserialization process involves taking the stored session data (usually the user ID) and using it to retrieve the full user object from the database or another storage mechanism.
