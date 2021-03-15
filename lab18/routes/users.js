const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const usersController = require('../controllers/users_controller');
var cookieParser = require('cookie-parser');
const isAuth = require('../util/is-auth');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/logout', isAuth, usersController.logout);

router.get('/register', usersController.getRegister);

router.post('/register', usersController.postRegister);

router.get('/', usersController.getLogIn);

router.post('/', usersController.postLogIn);


module.exports = router;