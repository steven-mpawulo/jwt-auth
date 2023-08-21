const express = require('express');
const signup = require('../controllers/signUpController');
const login = require('../controllers/loginController');
const getAllUsersController = require('../controllers/getAllUsersController');
const userRouter = express.Router();

// signup user 
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/users', getAllUsersController)

module.exports = userRouter;