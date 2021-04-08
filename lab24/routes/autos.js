const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const dreamgarageController = require('../controllers/dreamgarage_controller');

router.get('/agregarauto', isAuth, dreamgarageController.getAgregarAuto);

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads/autos');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

router.post('/agregarauto', isAuth, multer(
	{ storage: fileStorage }
	).single('imagen_auto'), dreamgarageController.postAgregarAuto); 

router.get('/dreamgarage', isAuth, dreamgarageController.getDreamGarage);

router.post('/dreamgarage/buscar', dreamgarageController.postBuscar);

router.get('/', dreamgarageController.getAutos);

module.exports = router;