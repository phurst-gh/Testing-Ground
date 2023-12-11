const express = require('express')
const expressValidator = require('express-validator');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require("passport");
const MongoStore = require("connect-mongo");
const session = require('express-session');

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
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongoUrl: process.env.DATABASE })
}));

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

const corsOptions = {
  origin: 'http://localhost:3000', // Whitelist my frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));

// After any potential middleware (auth etc) we call our routes
app.use('/', routes);

// We export it so we can start the site in server/index.js
module.exports = app;