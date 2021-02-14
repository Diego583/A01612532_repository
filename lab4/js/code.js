let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");

b1.onclick = () => {
let it = document.getElementById("it");
it.innerHTML = '<table id="table"></table>';
var num = prompt("Inserta un número: ");
let tabla = document.getElementById("table");
tabla.innerHTML = "<tr><th>NUMERO</th><th>CUADRADO</th><th>CUBO</th></tr>";
for (let i = 1; i <= num; i++) {
	var row = document.createElement("tr");
	row.innerHTML = "<td>" + i + "</td>" + "<td>" + Math.pow(i, 2) + "</td>" + "<td>" + Math.pow(i, 3) + "</td>";
	tabla.appendChild(row);
	}
}

b2.onclick = () => {
	var startTime = Math.floor(Date.now() / 1000);
	const n1 = Math.floor(Math.random() * 10001);
	const n2 = Math.floor(Math.random() * 10001);
	const r = n1 + n2;
	var sum = prompt("El resultado de " + n1 + " + " + n2 + " es: ");
	let s = document.getElementById("s");
	if (sum != r) {
		s.setAttribute("style", "color: #FB0C0C");
		s.innerHTML = 'INCORRECTO';
	} else {
		s.setAttribute("style", "color: #52E906");
		s.innerHTML = 'CORRECTO';
	}
	var stopTime = Math.floor(Date.now() / 1000);
	let timer = document.getElementById("timer");
	timer.innerHTML = "Tiempo de respuesta: " + (stopTime - startTime) + " segundos.";
}

b3.onclick = () => {
	const a1 = [-1, 0, 9];
	const a2 = [-1, 0, 9, 0, 0, 8775, -45];
	const a3 = [-1, 0, 9, -20, -11, 0, 0, 0, 78, 1, 45, 0, -78];
	contador(a1);
	contador(a2);
	contador(a3);
}

function contador(arr) {
	var rc = [0, 0, 0];
	for (let i = 0; i < arr.length;i++) {
		if (arr[i] < 0) {
		rc[0]++;
		} else if (arr[i] == 0) {
			rc[1]++;
		} else if (arr[i] > 0) {
			rc[2]++;
		}
	}
	let rconteo = document.getElementById("rconteo");
	var d = document.createElement("div");
	d.setAttribute("style", "color: #52E906");
	d.innerHTML = "<hr>" + "<div>" + "Números negativos: " + rc[0] + " <br>Ceros: " + rc[1] + " <br>Números positivos: " + rc[2] + "</div>" + "<br>" + "<hr>";
	rconteo.appendChild(d);
}

b4.onclick = () => {
	const a1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
	const a2 = [[1, 2, 3, 8], [4, 5, 6, 611], [7, 8, 9], [1, 3], [2, 88, 94, 12, 48], [87, 51, 98]];
	const a3 = [[123, 23, 3], [465, 5555, 6], [77, 98], [1, 20, 65], [88, 94, 12, 48], [99987, 51, 98, 6565], [12121, 4566, 89]];
	promedios(a1);
	promedios(a2);
	promedios(a3);
}

function promedios(arr) {
	var proms = new Array();
	for (let i = 0; i < arr.length; i++) {
		var sum = 0;
		for (let j = 0; j < arr[i].length; j++) {
			sum += arr[i][j];
		}
		//proms.push((Math.round((sum/arr[i].length) * 100) / 100).toFixed(2));
		proms.push((sum/arr[i].length).toFixed(2));
	}
	let prom = document.getElementById("prom");
	var d = document.createElement("div");
	d.setAttribute("style", "color: #52E906");
	d.innerHTML = "<hr>" + "<div>" + "[" + proms.toString() + "]" + "<br>" + "<hr>";
	prom.appendChild(d);
}

b5.onclick = () => {
	const n1 = 109;
	const n2 = -87759;
	const n3 = 10920110078145078;
	inversos(n1);
	inversos(n2);
	inversos(n3);
}

function inversos(x) {
	var rx = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
	let inv = document.getElementById("inv");
	var d = document.createElement("div");
	d.setAttribute("style", "color: #52E906");
	d.innerHTML = "<hr>" + "<div>" + rx + "<br>" + "<hr>";
	inv.appendChild(d);
}

b6.onclick = () => {
	var c = 0;
	var tf = 0;
	const nm = Math.floor(Math.random() * 101);
	let nmo = document.getElementById("nmo");
	var guess = prompt("Trata de adivinar el número entre el 1 y el 100: ");
	while (tf != 1) {
		c++;
		if (guess < nm) {
		guess = prompt("MAYOR");
		} else if (guess > nm) {
			guess = prompt("MENOR");
		} else {
			nmo.innerHTML = "El número mágico es " + nm + "<br>Te tomo " + c + " intentos adivinar el número." ;
			tf = 1;
		}
	}
}

