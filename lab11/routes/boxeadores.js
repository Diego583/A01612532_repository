const express = require('express');
var fs = require('fs');

const router = express.Router();

const bodyParser = require('body-parser');
const boxeadores = ["Canelo", "Terrence", "Inoue", "Teófimo"];


router.use(bodyParser.urlencoded({extended: false}));

router.get('/agregarboxeador', (request, response, next) => {
	html = '<html><head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += '<body><h1>Agrega otro boxeador</h1>';
    html += '<form action="agregarboxeador" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar boxeador"></form>';
    html += '<form action="/boxeadores" method="GET"><button>Mejores boxeadores</button></form>';
    html += '<form action="/" method="GET"><button>Menu RUTAS</button></form>';
    html += '</body></html>'; 
    response.send(html);
});

router.post('/agregarboxeador', (request, response, next) => {
    boxeadores.push(request.body.nombre);
    fs.writeFileSync('mejoresboxeadores.txt', boxeadores);
    response.redirect('/boxeadores');
});

router.use('/', (request, response, next) => {
	let html = '<h1>Boxeadores</h1><ol>';
	for (let boxeador of boxeadores) {
		html += '<li>' + boxeador + '</li>';
	}
	html += '</ol>';
	html += '<form action="/boxeadores/agregarboxeador" method="GET"><button>Agregar boxeador</button></form>';
	html += '<form action="/" method="GET"><button>Menu RUTAS</button></form>';
    response.send(html); 
});

module.exports = router;
