document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);



function iniciarSesion(){

var sCorreo = '' ;
var sContrasenna = '' ;
var bAcceso = false;

sCorreo = document.querySelector('#txtCorreo').value;
sContrasenna = document.querySelector('#txtContrasenna').value;

bAcceso = validarCredeniales(sCorreo,sContrasenna);
console.log(bAcceso);


}