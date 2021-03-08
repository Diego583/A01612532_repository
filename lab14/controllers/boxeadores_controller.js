const path = require('path');
const Boxeador = require('../models/boxeador');

exports.getAgregarBoxeador = (request, response, next) => {
	response.render('agregarboxeador', {
		titulo: 'Agregar boxeador',
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.postAgregarBoxeador = (request, response, next) => {
	const nuevo_boxeador = new Boxeador(request.body.nombre, request.body.apellido, request.body.imagen);
	nuevo_boxeador.save();

	response.setHeader('Set-Cookie', ['ultimo_boxeador=' + (nuevo_boxeador.nombre + ' ' + nuevo_boxeador.apellido) + '; HttpOnly']);

    response.redirect('/boxeadores');
};

exports.get = (request, response, next) => {
	console.log(request.cookies);
	response.render('boxeadores', {
		lista_boxeadores: Boxeador.fetchAll(),
		isLogged: request.session.isLogged === true ? true : false
	});
};
