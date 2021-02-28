const boxeadores = ["Canelo", "Terrence", "Inoue", "Teófimo"];
var fs = require('fs');

const requestHandler = (request, response) => {
    if (request.url === "/boxeadores") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Mejores boxeadores libra por libra actualmente.</h1></body>");
        
        if (boxeadores.length == 0) {
            response.write("<h2>La lista de los mejores boxeadores no ha sido generada.</h2>");
        } else {
            response.write("<ol>");
            for (let boxeador of boxeadores) {
                response.write("<li>");
                response.write(boxeador);
                response.write("</li>");
            }
            response.write("</ol>");  
        }
        response.write('<p>Otras rutas: /agregarboxeador</p>');
        response.write("</html>");
        response.end();
    } else if (request.url === "/agregarboxeador" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Agrega otro boxeador</h1>");
        response.write('<form action="agregarboxeador" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar boxeador"></form>');
        response.write("</body>");
        response.write('<p>Otras rutas: /boxeadores</p>');
        response.write("</html>");
        response.end();
    } else if (request.url === "/agregarboxeador" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
        datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_boxeador = datos_completos.split('=')[1];
            boxeadores.push(nuevo_boxeador);
            fs.writeFileSync('mejoresboxeadores.txt', boxeadores);
            return response.end();
        });

    } else if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Rutas</h1></body>");
        response.write("<ul>");
        response.write("<li>/boxeadores</li>");
        response.write("<li>/agregarboxeador</li>");
        response.write("</ul>");
        response.write("</html>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>Page not found.</h1></body>");
        response.write("</html>");
        return response.end();
    }  
}
module.exports = requestHandler;