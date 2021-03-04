const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.use('/lamborghini', (request, response, next) => {
	response.sendFile(path.join(__dirname,'..','views', 'lamborghini.html'));
});

router.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname,'..','views', 'autos.html'));
});

module.exports = router;