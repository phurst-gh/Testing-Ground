const express = require('express');
// const cors = require('cors');

// Create our Express app
const app = express();
//Import routes
const routes = require('../routes/index');

// app.use(cors());

// After any potential middleware (auth etc) we call our routes
app.use('/', routes);

// We export it so we can start the site in server/index.js
module.exports = app;