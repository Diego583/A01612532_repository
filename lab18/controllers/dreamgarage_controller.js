const path = require('path');
const Auto = require('../models/auto');

exports.getAgregarAuto = (request, response, next) => {
	response.render('agregarauto', {
		titulo: 'Agregar auto',
        csrfToken: request.csrfToken(),
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.postAgregarAuto = (request, response, next) => {
	const nuevo_auto = new Auto(request.body.marca, request.body.modelo, request.body.imagen);
	nuevo_auto.save().then(() => {
        response.setHeader('Set-Cookie', ['ultimo_auto=' + (nuevo_auto.marca + ' ' + nuevo_auto.modelo) + '; HttpOnly']);
		response.redirect('/autos/dreamgarage');
    }).catch(err => console.log(err));
};

exports.postAuto = (request, response, next) => {
	const id = request.body.auto_id;
	Auto.fetchOne(id)
	.then(([rows, fieldData]) => {
        	response.render('dreamgarage', {
        		lista_autos: rows,
        		isLogged: request.session.isLogged === true ? true : false
        	});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDreamGarage = (request, response, next) => {
	console.log(request.cookies);
	Auto.fetchAll()
	.then(([rows, fieldData]) => {
        	response.render('dreamgarage', {
        		lista_autos: rows,
        		isLogged: request.session.isLogged === true ? true : false
        	});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAutos = (request, response, next) => {
	response.render('autos', {
		titulo: 'GIFS AUTOS',
		isLogged: request.session.isLogged === true ? true : false
	});
};
