const path = require('path');
const Auto = require('../models/auto');

exports.getAgregarAuto = (request, response, next) => {
	response.render('agregarauto', {
		titulo: 'Agregar auto',
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.postAgregarAuto = (request, response, next) => {
    const image = request.file;
    if (!image) return response.status(422).redirect('/');
	const nuevo_auto = new Auto(request.body.marca, request.body.modelo, image.filename);
	nuevo_auto.save().then(() => {
        response.setHeader('Set-Cookie', ['ultimo_auto=' + (nuevo_auto.marca + ' ' + nuevo_auto.modelo) + '; HttpOnly']);
		response.redirect('/autos/dreamgarage');
    }).catch(err => console.log(err));
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

exports.postBuscar = (request, response, next) => {
    const name = request.body.valor_busqueda;
    Auto.fetchByName(name)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
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
