const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const User = mongoose.model('User');

exports.emailExists = async (req, res, next) => {
  const { email } = req.body;
console.log('Inside emailExists');
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log('Inside emailExists USER EXISTS');
      res.status(400).json({ error: 'Email already exists' });
    } else {
      // Email available
      console.log('Inside emailExists USER DOES NOT EXISTS');
      next();
    }
  } catch (error) {
    console.log('Inside emailExists CATCH');
    console.error(`Error checking email existence: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.validateRegister = (req, res, next) => {
  // Validation methods from ExpressValidator
  req.sanitizeBody('firstName', 'lastName');
  req.checkBody('firstName', 'You must supply a first name.').notEmpty();
  req.checkBody('lastName', 'You must supply a last name.').notEmpty();
  req.checkBody('email', 'You must supply an email.').notEmpty();
  req.checkBody('password', 'Password cannot be blank.').notEmpty();
  req.checkBody('passwordConfirm', 'Confirm password cannot be blank.').notEmpty();
  req.checkBody('passwordConfirm', 'Oops! your passwords do not match.').equals(req.body.password);
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })

  const errors = req.validationErrors()
  console.log(errors);

  if (errors) {
    console.log('Inside validateRegister errors');
    const errMessages = errors.map(err => err.msg);
    res.status(500).json(errMessages);
    return;
  }

  console.log('Inside validateRegister');
  next(); // If no errors, continue..
}

exports.register =  async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });
  
  // Instead of using User.register (which is a callback based fucntion from passport-local-mongoose) we use..
  // ..promisify(method-to-promisify, obj-contiaing-method) from es6-promisify so that we can keep using async/await
  const registerWithPromise = promisify(User.register, User);
  await registerWithPromise(user, req.body.password);
  console.log('Inside register');
  res.send('it worked!');
  next(); // Continue onto authController.js
}

