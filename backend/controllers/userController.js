const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const User = mongoose.model('User');

exports.validateRegister = (req, res, next) => {
  console.log(req.body);
  console.log('++++++++++++');
  console.log('++++++++++++');
  console.log('++++++++++++');
  console.log('++++++++++++');
  // Validation methods from ExpressValidator
  req.checkBody('firstName', 'You must supply a first name.').notEmpty();
  req.checkBody('lastName', 'You must supply a last name.').notEmpty();
  req.checkBody('email', 'You must supply a first name.').notEmpty();
  req.checkBody('password', 'Password cannot be blank.').notEmpty();
  req.checkBody('passwordConfirm', 'Confirm password cannot be blank.').notEmpty();
  req.checkBody('passwordConfirm', 'Oops! your passwords do not match.').equals(req.body.password);
  // req.sanitizeBody('firstName', 'lastName');
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })

  const errors = req.validationErrors()
  if (errors) {
    // Do flash message for error
    const errMessages = errors.map(err => err.msg);
    res.status(500).json(errMessages);
    return;
  }

  next(); // If no errors, continue..
}

exports.register =  async (req, res, next) => {
  console.log(11111111111);
  console.log(11111111111);
  console.log(11111111111);

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });
  
  const registerWithPromise = promisify(User.register, User);
  await registerWithPromise(user, req.body.password);
  res.send('It worked!!');
  next();
}

