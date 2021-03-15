const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const boxeadoresController = require('../controllers/boxeadores_controller');
var cookieParser = require('cookie-parser');
const isAuth = require('../util/is-auth');

router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.get('/agregarboxeador', isAuth , boxeadoresController.getAgregarBoxeador);

router.post('/agregarboxeador', isAuth, boxeadoresController.postAgregarBoxeador);

router.post('/', isAuth, boxeadoresController.postBoxeador);

router.get('/', isAuth, boxeadoresController.get);

module.exports = router;