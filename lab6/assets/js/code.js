let comprar = document.getElementById("comprar");
let sushi = document.getElementById("sushi");
let pizza = document.getElementById("pizza");
let burger = document.getElementById("burger");
let sc = document.getElementById("sc");
let is = document.getElementById("is");
let ip = document.getElementById("ip");
let ib = document.getElementById("ib");
const csushi = 100;
const cpizza = 200;
const cburger = 150;
var is_value = 0;
var ip_value = 0;
var ib_value = 0;
var costoTotal = 0;


comprar.onclick = () => {
	comprar.classList.add('hide');
	sushi.classList.remove('hide');
	pizza.classList.remove('hide');
	burger.classList.remove('hide');
}

is.oninput = () => {
	is_value = is.value;
	total(is_value*csushi);
}

ip.oninput = () => {
	ip_value = ip.value;
	total(ip_value*cpizza);
}

ib.oninput = () => {
	ib_value = ib.value;
	total(ib_value*cburger);
}

function total(t) {
	costoTotal+=t;
	sc.innerHTML = "PRECIO TOTAL: $" + costoTotal;
}