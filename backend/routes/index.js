const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
  const data = { message: 'HOME!' };
  console.log('HOME')
  res.json(data);
});
// router.get('/', catchErrors(userController.registeration))

router.get('/login', catchErrors(userController.loginForm));
router.get('/register', catchErrors(userController.registerForm));

module.exports = router;