// document.getElementById('#tnIngresar').addEventListener('click',iniciarSesion());

usuariosRegistrados = {
	"hernan" : "1234",
	"invitado" : "1234",
};

function iniciarSesion(){

	// var usuarioIngresado = '' ;
	// var contrasenaIngresada = '' ;
	var bAcceso = false;

	usuarioIngresado = document.getElementById('usuario').value;
	contrasenaIngresada = document.getElementById('contrasena').value;

	bAcceso = validarCredeniales(usuarioIngresado,contrasenaIngresada);
	console.log(bAcceso);

	if (bAcceso){
		location.href ="cliente.html";
	}

}

function validarCredeniales(usuarioIngresado,contrasenaIngresada){
	
	if (usuariosRegistrados[usuarioIngresado]){
		if (usuariosRegistrados[usuarioIngresado] == contrasenaIngresada){
			return true;	
		}else{
			alert("La contraseña ingresada es incorrecta. Intente de nuevo.");
		}
	}else{
		alert("El usuario ingresado no se encuentra registrado.");
	}
	return false;
}