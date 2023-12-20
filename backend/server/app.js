const express = require('express')
const expressValidator = require('express-validator');
const cors = require('cors');
const passport = require("passport");
const MongoStore = require("connect-mongo");
const session = require('express-session');
require('../handlers/passport');

// Create our Express app
const app = express();

//Import routes
const routes = require('../routes/index');

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data on the req
app.use(expressValidator());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongoUrl: process.env.DATABASE })
}));

// Passport JS is what we use to handle our logins
// initialize creates the passport object on the request and defines where the..
// ..shorthand user is located on the req object (defaults to req.user)
app.use(passport.initialize());
// session sets up calls the serialize && deserialize methods and interacts with..
// ..express-session. Must come after app.use("express-session")
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:3000', // Whitelist my frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));

// After any potential middleware we call our routes
app.use('/', routes);

// We export it so we can start the site in server/index.js
module.exports = app;