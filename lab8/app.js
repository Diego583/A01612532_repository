const arreglo = [12, 3, 4, 10, 1, 2, 15, 70];
    let suma = 0, promedio = 0;
    for(let item of arreglo) suma += item;
    promedio = suma / arreglo.length;
    console.log(promedio);

    const filesystem = require('fs');
    const str = "Mi nombre es Diego."
    filesystem.writeFileSync('archivo.txt', str);

    const n = 50;
    console.log('Numeros primos entre 1 y ' + n);
    let ipr, j, flag;
    for (ipr = 1; ipr <= n; ipr++) {
    	if (ipr == 1 || ipr == 0) continue;
    	flag = 1;
    	for (j = 2; j <= ipr / 2; ++j) {
    		if (ipr % j == 0) {
    			flag = 0;
    			break;
    		}
    	}
    	if (flag == 1) console.log(ipr);
    }

const http = require('http');
var fs = require('fs');
const server = http.createServer((request, response) => {
	request.url = '/create';
	if (request.url === "/create") {
        fs.readFile("../lab4/index.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
            }
             
            response.end();
        });
    } else {
        response.end();
    }
});
server.listen(3000);