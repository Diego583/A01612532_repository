const express = require('express');
const path = require('path');
var fs = require('fs');
const router = express.Router();
const bodyParser = require('body-parser');
const boxeadoresController = require('../controllers/boxeadores_controller');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/agregarboxeador', boxeadoresController.getAgregarBoxeador);

router.post('/agregarboxeador', boxeadoresController.postAgregarBoxeador);

router.get('/', boxeadoresController.get);

module.exports = router;