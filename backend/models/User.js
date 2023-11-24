const mongoose = require('mongoose');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('password-local-mongoose');

const userSchema = new mongoose.Schema({
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

userSchema.plugin(passportLocalMongoose, { usernamefield: 'email '});
userSchema.plugin(mongodbErrorHandler);

module.export = mongoose.model('User', userSchema);
