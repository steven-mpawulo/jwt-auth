const express = require('express');
const signup = require('../controllers/signUpController');
const login = require('../controllers/loginController');
const getAllUsersController = require('../controllers/getAllUsersController');
const verifyToken = require('../middleware/verifyToken');
const getSingleUserController = require('../controllers/getSingleUserController');
const userRouter = express.Router();

// signup user 
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/users', verifyToken, getAllUsersController);
userRouter.get('/user', verifyToken, getSingleUserController)

module.exports = userRouter;