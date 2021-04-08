module.exports = (request, response, next) => {
    if (!request.session.isLogged) {
        return response.redirect('/users/login');
    }
    next();
}
            