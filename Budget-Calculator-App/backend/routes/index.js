const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = { message: 'HOME!' };
  console.log('HOME')
  res.json(data);
});

router.get('/api/data', (req, res) => {
  const data = { message: '/api/data' };
  console.log('IN IN IN')
  res.json(data);
});


// router.get('/login', (req, res) => {});

// router.get('/register', (req, res) => {});

// For looking at previous months ingoings/outgoings
// router.get('/archive', (req, res) => ({}));

module.exports = router;