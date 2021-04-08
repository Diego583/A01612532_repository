const express = require('express');
const isAuth = require('../util/is-auth');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const usersController = require('../controllers/users_controller');
var cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/logout', isAuth, usersController.logout);

router.get('/login', usersController.getLogIn);

router.post('/login', usersController.postLogIn);

router.get('/', usersController.getRegister);

router.post('/', usersController.postRegister);

module.exports = router;