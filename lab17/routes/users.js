const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const usersController = require('../controllers/users_controller');
var cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/logout', usersController.logout);

router.get('/', usersController.getLogIn);

router.post('/', usersController.postLogIn);


module.exports = router;