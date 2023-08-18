const express = require('express');
const signup = require('../controllers/signUpController');
const userRouter = express.Router();

// signup user 
userRouter.post('/signup', signup);

module.exports = userRouter;