let compra = document.getElementById("compra");
let jb = document.getElementById("jb");
let cb = document.getElementById("cb");
let nb = document.getElementById("nb");

const preciojohn = 899;
const preciocepillo = 14.99;
const precio3220 = 119;
var sj = 20;
var sc = 50;
var sn = 10;
var total = 0;

jb.onclick = () => {
	var buyj = confirm("¿Deseas comprar a JOHN?");
	if (buyj == true) {
		var aj = prompt("Cuantós JOHN deseas comprar?");
		if (aj > sj) {
			alert("No hay suficientes unidades disponibles. Unidades en STOCK: " + sj);
		} else {
			sj = sj - aj;
			total += (preciojohn*aj);
			totalcompra(total);
		}
	}
}

cb.onclick = () => {
	var buyc = confirm("¿Deseas comprar CEPILLO?");
	if (buyc == true) {
		var ac = prompt("Cuantós CEPILLOS deseas comprar?");
		if (ac > sc) {
			alert("No hay suficientes unidades disponibles. Unidades en STOCK: " + sc);
		} else {
			sc = sc- ac;
			total += (preciocepillo*ac);
			totalcompra(total);
		}
	}
}

nb.onclick = () => {
	var buyn = confirm("¿Deseas comprar NOKIA-3220?");
	if (buyn == true) {
		var an = prompt("Cuantós NOKIA-3220 deseas comprar?");
		if (an > sn) {
			alert("No hay suficientes unidades disponibles. Unidades en STOCK: " + sn);
		} else {
			sn = sn - an;
			total += (precio3220*an);
			totalcompra(total);
		}
	}
}

function totalcompra(t) {
	var iva = t * 0.16;
	compra.innerHTML = "<strong>BASE:</strong> $" + (t - iva).toFixed(2) + "<br><strong>IVA:</strong> $" + iva.toFixed(2) + "<br><strong>TOTAL:</strong> $" + t.toFixed(2);
}