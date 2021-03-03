const express = require('express');
const path = require('path');
var fs = require('fs');

const router = express.Router();

const bodyParser = require('body-parser');
const boxeadores = ["Canelo", "Terrence", "Inoue", "Teófimo"];


router.use(bodyParser.urlencoded({extended: false}));

router.get('/agregarboxeador', (request, response, next) => {
	response.sendFile(path.join(__dirname,'..','views', 'agregarboxeador.html'));
});

router.post('/agregarboxeador', (request, response, next) => {
    boxeadores.push(request.body.nombre);
    response.redirect('/boxeadores');
});

router.use('/', (request, response, next) => {
	response.render('boxeadores', {lista_boxeadores: boxeadores});
});

module.exports = router;
