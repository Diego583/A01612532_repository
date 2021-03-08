const path = require('path');
const Auto = require('../models/auto');

exports.getAgregarAuto = (request, response, next) => {
	response.render('agregarauto', {
		titulo: 'Agregar auto',
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.postAgregarAuto = (request, response, next) => {
	const nuevo_auto = new Auto(request.body.marca, request.body.modelo, request.body.imagen);
	nuevo_auto.save();

	response.setHeader('Set-Cookie', ['ultimo_auto=' + (nuevo_auto.marca + ' ' + nuevo_auto.modelo) + '; HttpOnly']);

    response.redirect('/autos/dreamgarage');
};

exports.getDreamGarage = (request, response, next) => {
	console.log(request.cookies);
	response.render('dreamgarage', {
		lista_autos: Auto.fetchAll(),
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.getAutos = (request, response, next) => {
	response.render('autos', {
		titulo: 'GIFS AUTOS',
		isLogged: request.session.isLogged === true ? true : false
	});
};
