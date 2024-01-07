const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// const { catchErrors } = require('../handlers/errorHandlers');

// Authentication
router.post('/register',
  userController.validateRegister,
  userController.isEmailAvailable,
  userController.register,
  authController.login
);

router.post('/login', authController.login);
// router.post('/logout', authController.logout);
router.post('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy(error => {

      req.session = null;
      if (error) return next(error);

      res.send({ logout: true })
  });
    //   console.log(req.session);

  // req.logout(err => {
  //   console.log('Logout called!')
  //   if (err) console.log(err);
  // });  // Clears the user from the session
  // res.clearCookie('connect.sid');
  // res.send({
  //   message: 'Logged out',
  //   isAuth: req.isAuthenticated()
  // })
}

  // res.clearCookie('connect.sid'); 
	// req.logout(err => {
	// 	console.log({
  //     message: 'Logged out',
  //     isAuth: req.isAuthenticated()
  //   })
	// 	req.session.destroy(err => { // destroys the session
	// 		res.send({
  //       message: 'Logged out',
  //       isAuth: req.isAuthenticated()
  //     });
	// 	});
	// });

  // console.log('before', req.isAuthenticated());

  // req.logout(req.user, (err)=> {
  //     if (err) return next(err);
  // })
  // console.log('after', req.isAuthenticated());
  // res.clearCookie('connect.sid');
  // res.send({isAuth: req.isAuthenticated(), user: req.user});
})

router.get('/api/is-authenticated', authController.isAuthenticated);

module.exports = router;