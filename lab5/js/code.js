let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let vb = document.getElementById("vb");
let msg = document.getElementById("msg");

var password_val;
var confirmpassword_val;
password.onkeyup = () => {
    password_val = password.value;
}

confirmpassword.onkeyup = () => {
    confirmpassword_val = confirmpassword.value;
}

vb.onclick = () => {
	if (password_val != confirmpassword_val) {
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