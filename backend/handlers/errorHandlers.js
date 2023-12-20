/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try/catch in each controller, we wrap the given  function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchErrors = (fn) => {
  // 1. Returns a function that takes the standard Express.js middleware parameters
  return function(req,res,next) {
    // 2. fn(req, res, next): Invokes the provided function, which is expected to be an asynchronous function returning a promise.
    // 3. .catch(next): If any errors occur during the execution of the asynchronous function, they are caught, and the next function is called with the error.
    // ...This is a common pattern in Express.js to pass errors to the error-handling middleware
    return fn(req, res, next).catch(next);
  }
}


/*
  Not Found Error Handler

  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

/*
  MongoDB Validation Error Handler

  Detect if there are mongodb validation errors that we can nicely show via flash messages
*/

exports.checkValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err);
  // validation errors look like
  const errMessages = err.map(err => err.msg);
  console.log(err)
  res.status(500).json(errMessages);
  next();
};
