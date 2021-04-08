const path = require('path');
const Boxeador = require('../models/boxeador');

exports.getAgregarBoxeador = (request, response, next) => {
	response.render('agregarboxeador', {
		titulo: 'Agregar boxeador',
		isLogged: request.session.isLogged === true ? true : false
	});
};

exports.postAgregarBoxeador = (request, response, next) => {
    const image = request.file;
    if (!image) return response.status(422).redirect('/');
	const nuevo_boxeador = new Boxeador(request.body.nombre, request.body.apellido, image.filename);
    nuevo_boxeador.save().then(() => {
        response.setHeader('Set-Cookie', ['ultimo_boxeador=' + (nuevo_boxeador.nombre + ' ' + nuevo_boxeador.apellido) + '; HttpOnly']);
    	response.redirect('/boxeadores');
    }).catch(err => console.log(err));
};

exports.postBuscar = (request, response, next) => {
    const name = request.body.valor_busqueda;
    Boxeador.fetchByName(name)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.get = (request, response, next) => {
	console.log(request.cookies);
	Boxeador.fetchAll()
	.then(([rows, fieldData]) => {
        	response.render('boxeadores', {
        		lista_boxeadores: rows,
        		isLogged: request.session.isLogged === true ? true : false
        	});
        })
        .catch(err => {
            console.log(err);
        });
};
