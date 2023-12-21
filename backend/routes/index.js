const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
  const data = { message: 'connected!' };
  res.json(data);
});

// Authentication
router.post('/register',
  userController.validateRegister,
  userController.emailExists,
  userController.register,
  authController.login
);

router.get('/login', authController.loginPage);
router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.get('/isLoggedIn', authController.isLoggedIn, (req, res) => {
  res.json('User logged in!')
});

module.exports = router;