const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
  const data = { message: 'HOME!' };
  console.log('HOME')
  res.json(data);
});

// 1. Validate the data
// w.d Register the user
// 3. Log in the user
router.post('/register',
  userController.validateRegister,
  userController.register
);

module.exports = router;