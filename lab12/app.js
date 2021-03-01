const express = require('express');
const app = express();
const path = require('path');

app.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'git.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
	let html = '<h1>RUTAS</h1>';
    html += '<form action="/git" method="GET"><button>TIENDA</button></form>'; 
    response.send(html); 
});

app.use((request, response, next) => {
	response.status(404).send('<h1>Recurso no encontrado</h1>');
});


app.listen(3000);