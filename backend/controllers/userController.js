const mongoose = require('mongoose');
const util = require('util')
const User = mongoose.model('User');
const { body, validationResult } = require('express-validator');

exports.isEmailAvailable = async (req, res, next) => {
  const { email } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ exists: true, message: 'Email already exists' });
    } else {
      // Email is available
      next();
    }
  } catch (error) {
    res.status(500).json({
      exists: false,
      message: error.message
    });
  }
};

exports.validateRegister = (req, res, next) => {
  // Validation: from express-validator
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('You must supply a first name.');
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('You must supply a last name.');
  body('email')
    .trim()
    .normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
    })
    .notEmpty()
    .withMessage('You must supply an email.')
    .isEmail()
    .withMessage('Please enter a valid email address');
  body('password')
    .notEmpty()
    .withMessage('Password cannot be blank.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 ccharacters long.')
    .isAlphanumeric()
    .withMessage('Password must contain both letters and numbers.');
  body('passwordConfirm')
    .notEmpty()
    .withMessage('Confirm password cannot be blank.')
    .equals(req.body.password)
    .withMessage('Oops! your passwords do not match.');

  // Check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(123, errors)
    res.status(500).json({ errors });
    next(errors);
  }

  next();
};

exports.register =  async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });
  
  // Promisify User.register to keep using async/await
  const registerWithPromise = util.promisify(User.register.bind(User));
  await registerWithPromise(user, req.body.password);
  next();
};
