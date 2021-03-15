const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const dreamgarageController = require('../controllers/dreamgarage_controller');
var cookieParser = require('cookie-parser');
const isAuth = require('../util/is-auth');

router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.get('/agregarauto', isAuth, dreamgarageController.getAgregarAuto);

router.post('/agregarauto', isAuth, dreamgarageController.postAgregarAuto);

router.get('/dreamgarage', isAuth, dreamgarageController.getDreamGarage);

router.post('/dreamgarage', isAuth, dreamgarageController.postAuto);

router.get('/', dreamgarageController.getAutos);

module.exports = router;