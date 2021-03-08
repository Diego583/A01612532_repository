exports.getLogIn = (request, response, next) => {
	response.render('login', {
		titulo: 'Inicia sesión',
		isLogged: request.session.isLogged === true ? true : false
	});
}

exports.postLogIn = (request, response, next) => {
	request.session.isLogged = true;
	request.session.username = request.body.username;
	response.redirect('/');
}

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};