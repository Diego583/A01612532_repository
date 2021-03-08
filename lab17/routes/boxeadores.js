const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const boxeadoresController = require('../controllers/boxeadores_controller');
var cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());

router.get('/agregarboxeador', boxeadoresController.getAgregarBoxeador);

router.post('/agregarboxeador', boxeadoresController.postAgregarBoxeador);

router.post('/', boxeadoresController.postBoxeador);

router.get('/', boxeadoresController.get);

module.exports = router;