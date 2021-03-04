const path = require('path');
const Auto = require('../models/auto');

exports.getAgregarAuto = (request, response, next) => {
	response.sendFile(path.join(__dirname,'..','views', 'agregarauto.html'));
};

exports.postAgregarAuto = (request, response, next) => {
	const nuevo_auto = new Auto(request.body.marca, request.body.modelo, request.body.imagen);
	nuevo_auto.save();
    response.redirect('/autos/dreamgarage');
};

exports.getDreamGarage = (request, response, next) => {
	response.render('dreamgarage', {lista_autos: Auto.fetchAll()});
};

exports.getAutos = (request, response, next) => {
	response.sendFile(path.join(__dirname,'..','views', 'autos.html'));
};
