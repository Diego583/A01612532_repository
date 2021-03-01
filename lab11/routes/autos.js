const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.use('/lamborghini', (request, response, next) => {
	html = '<html><head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += '<body><h1>Lamborgini</h1><br>';
    html += '<h2>Huracan Performante</h2>';
    html += '<img src="https://periodismodelmotor.com/wp-content/uploads/2019/06/lamborghini-huracan-performante-228-velocidad.jpg" alt="Huracan performante" width="600" height="400"><br>';
    html += '<h2>Aventador SVJ</h2>';
    html += '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lamborghini-aventador-svj-roadster-1579720277.jpg?crop=0.763xw:0.572xh;0.237xw,0.318xh&resize=1200:*" alt="Aventador SVJ" width="600" height="300"><br>';
    html += '<br><form action="/" method="GET"><button>Menu RUTAS</button></form>';
    html += '</body></html>'; 
    response.send(html);
});

router.use('/', (request, response, next) => {
    html = '<html><head><meta charset="UTF-8"><title>Servidor node</title></head>';
    html += '<body><h1>GIFS AUTOS</h1><br>';
    html += '<h2>Mclaren P1</h2>';
    html += '<img src="https://media1.giphy.com/media/aA7WDclCy08hy/giphy.gif" alt="P1"><br>';
    html += '<h2>Aventadors @night</h2>';
    html += '<img src="https://i.pinimg.com/originals/0b/0d/3b/0b0d3bceba7d0b5dbe7435f3707edbb8.gif" alt="Aventador @night"><br>';
    html += '<h2>F40 :O</h2>';
    html += '<img src="https://i.pinimg.com/originals/a2/7a/66/a27a66773c419a3c2de96b63b53f81c7.gif" alt="Ferrari F40"><br>';
    html += '<br><form action="/" method="GET"><button>Menu RUTAS</button></form>';
    html += '</body></html>'; 
    response.send(html);
});

module.exports = router;