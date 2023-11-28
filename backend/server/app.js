const express = require('express')
const expressValidator = require('express-validator');
const cors = require('cors');

// Create our Express app
const app = express();

//Import routes
const routes = require('../routes/index');

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data on the req
app.use(expressValidator());

const corsOptions = {
  origin: 'http://localhost:3000', // Frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));

// After any potential middleware (auth etc) we call our routes
app.use('/', routes);

// We export it so we can start the site in server/index.js
module.exports = app;