const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const dreamgarageController = require('../controllers/dreamgarage_controller');
var cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.get('/agregarauto', dreamgarageController.getAgregarAuto);

router.post('/agregarauto', dreamgarageController.postAgregarAuto);

router.get('/dreamgarage', dreamgarageController.getDreamGarage);

router.get('/', dreamgarageController.getAutos);

module.exports = router;