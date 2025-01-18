const express = require('express')
const cors = require('cors');
const passport = require("passport");
const MongoStore = require("connect-mongo");
const session = require('express-session');

const routes = require('../routes/index');
const errorHandlers = require("../handlers/errorHandlers");
require('../handlers/passport');

// Create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessions allow us to store data on visitors from request to request
// This helps keep users logged in
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongoUrl: process.env.DATABASE }),
  cookie: {
    maxAge: 86400000 // 24 hours
  }
}));

// Passport JS is what we use to handle our logins
// initialize creates the passport object on the request and defines where the..
// ..shorthand user is located on the req object (defaults to req.user)
app.use(passport.initialize());
// session sets up and calls the serialize & deserialize methods in passport.js..
// ..and interacts with express-session. Must come after express-session
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:3000', // Whitelist my frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));

// After any potential middleware we call our routes
app.use('/', routes);

// If the above routes didnt work, we 404 them and forward to error handler
// Look into more error handling
// app.use(errorHandlers.notFound);

// We export it so we can start the site in server/index.js
module.exports = app;