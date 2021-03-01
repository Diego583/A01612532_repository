const express = require('express');
const app = express();
const rutasboxeadores = require('./routes/boxeadores');
const rutasautos = require('./routes/autos');

app.use('/boxeadores', rutasboxeadores);
app.use('/autos', rutasautos);

app.get('/', (request, response, next) => {
	let html = '<h1>RUTAS</h1>';
	html += '<p>BOX:</p>';
    html += '<form action="/boxeadores" method="GET"><button>Mejores boxeadores</button></form>';
    html += '<form action="/boxeadores/agregarboxeador" method="GET"><button>Agregar boxeador</button></form>'; 
    html += '<p>AUTOS:</p>';
    html += '<form action="/autos" method="GET"><button>GIFS</button></form>';
    html += '<form action="/autos/lamborghini" method="GET"><button>Lamborghini</button></form>'; 
    response.send(html); 
});

app.use((request, response, next) => {
	response.status(404).send('<h1>Recurso no encontrado</h1>');
});

app.listen(3000);