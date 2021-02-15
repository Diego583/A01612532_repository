let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let vb = document.getElementById("vb");
let msg = document.getElementById("msg");

var password_val;
var confirmpassword_val;
var ud = true;
var gp = false;
password.onkeyup = () => {
    password_val = password.value;
}

confirmpassword.onkeyup = () => {
    confirmpassword_val = confirmpassword.value;
}

vb.onclick = () => {
	if (password_val == undefined || confirmpassword_val == undefined) {
		camposvacios();
	} else if (password_val.length < 6 || password_val.toLowerCase() == password_val) {
			nosegura();
	} else if (password_val != confirmpassword_val) {
				error();
	} else noerror();
}

function error() {
	msg.style.backgroundColor = '#F9738F';
	msg.innerHTML = "Las contraseñas no coinciden.";
}

function noerror() {
	msg.style.backgroundColor = '#92F779';
	msg.innerHTML = "Contraseñas correctas.";
}

function camposvacios() {
	msg.style.backgroundColor = '#F9738F';
	msg.innerHTML = "Por favor llena todos los campos.";
}

function nosegura() {
	msg.style.backgroundColor = '#F9738F';
	msg.innerHTML = "La contraseña debe de contener por lo menos 6 carácteres y una mayúscula.";
}