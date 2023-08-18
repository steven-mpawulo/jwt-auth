const express = require('express');
const signup = require('../controllers/signUpController');
const login = require('../controllers/loginController');
const userRouter = express.Router();

// signup user 
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;