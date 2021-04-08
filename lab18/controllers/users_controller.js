const User = require('../models/user');
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.getLogIn = (request, response, next) => {
	console.log("csruf: "+request.csrfToken());
	response.render('login', {
		titulo: 'Inicia sesión',
		error: request.session.error,
		isLogged: request.session.isLogged === true ? true : false
	});
}

exports.postLogIn = (request, response, next) => {
	request.session.error = " ";
	const username = request.body.username;
	User.fetchOne(username)
	.then(([rows, fieldData]) => {
		if (rows.length < 1) {
			request.session.error = 'Usuario y/o contraseña incorrectos.';
			response.redirect('/users/login');
		} else 
		bcrypt.compare(request.body.password, rows[0].password)
	    .then(doMatch => {
	        if (doMatch) {
	            request.session.isLogged = true;
	            request.session.username = request.body.username;
	            return request.session.save(err => {
	                response.redirect('/');
	            });
	        }
	        request.session.error = 'Usuario y/o contraseña incorrectos.';
	        response.redirect('/users/login');
	    }).catch(err => {
	    	request.session.error = 'Usuario y/o contraseña incorrectos.';
	        response.redirect('/users/login');
	    });        
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getRegister = (request, response, next) => {
	response.render('register', {
		titulo: 'Registra datos de usuario',
		isLogged: request.session.isLogged === true ? true : false
	});
}

exports.postRegister = (request, response, next) => {
	const nuevo_usuario = new User(request.body.name, request.body.username, request.body.password);
	nuevo_usuario.save().then(() => {
		request.session.isLogged = true;
		request.session.username = request.body.username;
    	response.redirect('/');
    }).catch(err => console.log(err));
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};