const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const listController = require('../controllers/listController');

router.post('/api/register',
  userController.validateRegister,
  userController.isEmailAvailable,
  userController.register,
  authController.login
);

router.post('/api/login', authController.login);
router.post('/api/logout', authController.logout);

router.get('/api/is-authenticated', authController.isAuthenticated);

router.get('/api/add-list-item', listController.addListItem);
router.get('/api/get-list-items', listController.getListItems);

module.exports = router;