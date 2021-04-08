const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const boxeadoresController = require('../controllers/boxeadores_controller');

router.get('/agregarboxeador', isAuth , boxeadoresController.getAgregarBoxeador);

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

router.post('/agregarboxeador', isAuth, multer(
	{ storage: fileStorage }
	).single('imagen_boxeador'), boxeadoresController.postAgregarBoxeador); 

router.post('/', isAuth, boxeadoresController.postBoxeador);

router.get('/', isAuth, boxeadoresController.get);

module.exports = router;