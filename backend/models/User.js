const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: 'Please supply a first name',
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    // We have client side checks so user unlikely to see this validation error message but it helps with older browsers
    // ...it is wise to always check on server side
    validate: [validator.isEmail, 'Invalid email address.'],
    required: 'Please enter your email.'
  },
});

// Adds fields and methods needed for auth, use email as the login field (rather than username etc)
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
// Clean error messaging
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
