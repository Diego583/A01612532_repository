const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var cookieParser = require('cookie-parser')
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasboxeadores = require('./routes/boxeadores');
const rutasautos = require('./routes/autos');
const rutasUsers = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(session({
    secret: 'cuatro veinte siete cero tres veinte veintiuno', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});


app.use('/boxeadores', rutasboxeadores);
app.use('/autos', rutasautos);
app.use('/users', rutasUsers);


app.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname,'views', 'git.html'));
});

app.use((request, response, next) => {
	response.status(404).sendFile(path.join(__dirname,'views', 'notFound.html'));
});

app.listen(3000);