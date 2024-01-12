const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/register',
  userController.validateRegister,
  userController.isEmailAvailable,
  userController.register,
  authController.login
);

router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/api/is-authenticated', authController.isAuthenticated);

module.exports = router;