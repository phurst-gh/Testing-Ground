const mongoose = require('mongoose');

// Use dotenv to make .env vars available at process.env
require('dotenv').config();
// Import models
require('../models/User');

// Connect to the database and handle bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.log(`🚫 🐛 🚫 🐌 🚫 🐝 🚫 ${err.message} 🚫 🐛 🚫 🐌 🚫 🐝 🚫`)
})


// Start the app!
const app = require('./app'); // Question: Why does User fail to register if this is moved to the top of the file
const PORT = process.env.PORT || 3001;
app.set('port', PORT);
app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
