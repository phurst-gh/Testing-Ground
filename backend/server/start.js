require('dotenv').config();

// Connect to the database and handle bad connections
mongoose.connect(process.env.DATABSE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.log(`🚫 🐛 🚫 🐌 🚫 🐝 🚫 ${err.message} 🚫 🐛 🚫 🐌 🚫 🐝 🚫`)
})

// Import DB models
require('../models/User');

// Start the app!!
const app = require('./app');
const PORT = process.env.PORT || 7777;
app.set('port', PORT);
app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
