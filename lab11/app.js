const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/agregarboxeador', (request, response, next) => {
    response.send('<html><head><meta charset="UTF-8"><title>Servidor node</title></head><body><h1>Agrega otro boxeador</h1><form action="agregarboxeador" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar boxeador"></form></body></html>'); 
});

app.post('/agregarboxeador', (request, response, next) => {
    console.log(request.body.nombre);
    response.send('<h1>Boxeador guardado</h1>');
});

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);