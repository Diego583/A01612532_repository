const path = require('path');
const Boxeador = require('../models/boxeador');

exports.getAgregarBoxeador = (request, response, next) => {
	response.sendFile(path.join(__dirname,'..','views', 'agregarboxeador.html'));
};

exports.postAgregarBoxeador = (request, response, next) => {
	const nuevo_boxeador = new Boxeador(request.body.nombre, request.body.apellido, request.body.imagen);
	nuevo_boxeador.save();
    response.redirect('/boxeadores');
};

exports.get = (request, response, next) => {
	response.render('boxeadores', {lista_boxeadores: Boxeador.fetchAll()});
};
