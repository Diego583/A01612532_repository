const express = require('express');
const app = express();
const rutasboxeadores = require('./routes/boxeadores');
const rutasautos = require('./routes/autos');
const rutasUsers = require('./routes/users');
const path = require('path');
const session = require('express-session');

app.use(session({
    secret: 'cuatro veinte siete cero tres veinte veintiuno', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use('/boxeadores', rutasboxeadores);
app.use('/autos', rutasautos);
app.use('/users', rutasUsers);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname,'views', 'git.html'));
});

app.use((request, response, next) => {
	response.status(404).sendFile(path.join(__dirname,'views', 'notFound.html'));
});

app.listen(3000);