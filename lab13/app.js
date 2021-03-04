const express = require('express');
const app = express();
const rutasboxeadores = require('./routes/boxeadores');
const rutasautos = require('./routes/autos');
const path = require('path');

app.use('/boxeadores', rutasboxeadores);
app.use('/autos', rutasautos);
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