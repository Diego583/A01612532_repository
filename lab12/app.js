const express = require('express');
const app = express();

router.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'el-archivo.html'));
});

app.use((request, response, next) => {
	response.status(404).send('<h1>Recurso no encontrado</h1>');
});


app.listen(3000);