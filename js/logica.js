var usuarios = {
	"samir" : "pass1", 
	"ivankey" : "pass2",
	"hernan" : "pass3",
	"invitado" : "1234"
};


function login(){
	id = document.getElementById("id").value;
	password = document.getElementById("password").value;

	if (usuarios[id]){
		if (usuarios[id] == password){
			location.href ="pages/formulario-votacion.html";
		}else{
			alert("La contraseña es incorrecta")
		}
	}else{
		alert("No existe ningun usuario con ese nombre");
	}
}

function Candidato(id, nombre, nombreImg) {
	this.id = id
	this.nombre = nombre;
	this.nombreImg = nombreImg;
}

var candidatos = [
	new Candidato(1, "Alejandro Ordóñez", "ordonez.jpg"),
	new Candidato(2, "Germán Vargas Lleras", "vargas.jpg"),
	new Candidato(3, "Gustavo Petro", "petro.jpg"),
	new Candidato(4, "Humberto de la Calle", "delacalle.jpg"),
	new Candidato(5, "Iván Duque", "duque.jpg"),
	new Candidato(6, "Juan Carlos Pinzón", "pinzon.jpg"),
	new Candidato(7, "Marta Lucía Ramírez", "ramirez.jpg"),
	new Candidato(8, "Rodrigo Londoño", "londono.jpg"),
	new Candidato(9, "Piedad Córdoba", "cordoba.jpg"),
	new Candidato(10, "Sergio Fajardo", "fajardo.jpg"),
	new Candidato(11, "Voto en Blanco", "blanco.jpg")
];  

function verCandidatos(){

	candidatos.forEach(function (elemento, indice, array){
		console.log(elemento);
	});
	
}

function cargarCandidatos(){

	var divListaCandidatos = document.getElementById("divListaCandidatos");

	candidatos.forEach(function (elemento, indice, array){
		var divCol = document.createElement("div");
		divCol.setAttribute("class", "col s12 m4 l3");

		var divCard = document.createElement("div");
		divCard.setAttribute("id", "candidato"+elemento.id);
		divCard.setAttribute("class", "card hoverable waves-effect waves-blue");
		divCard.setAttribute("onclick", "seleccionar("+elemento.id+")");

		var divCardContent = document.createElement("div");
		divCardContent.setAttribute("class", "card-content center-align");
		divCardContent.setAttribute("style", "padding-bottom: 5px;");
		
		var img = document.createElement("img");
		img.setAttribute("src", "../images/candidatos/"+elemento.nombreImg);
		img.setAttribute("class", "circle responsive-img foto");

		// var big = document.createElement("p");
		// big.setAttribute("class", "truncate");
		// big.innerHTML = "<br>"+elemento.nombre;
		var divCardAction = document.createElement("div");
		divCardAction.setAttribute("class", "card-action center-align");
		divCardAction.innerHTML = "<div class='truncate'>"+elemento.nombre+"</div>";

		divCardContent.appendChild(img);
		// divCardContent.appendChild(big);
		divCard.appendChild(divCardContent);
		divCard.appendChild(divCardAction);
		divCol.appendChild(divCard);

		divListaCandidatos.appendChild(divCol);
	});
}


var candidatoSeleccionado = '';

function establecerCandidato(id){
	candidatos.forEach(function (elemento, indice, array){
		if (id == elemento.id){
			candidatoSeleccionado = elemento;
		}
	});
}

function seleccionar(id){

	candidatos.forEach(function (elemento, indice, array){
		var card = document.getElementById("candidato"+elemento.id);
		if (card.hasAttribute("disabled")){
			card.setAttribute("class", "card hoverable waves-effect waves-teal");
			card.removeAttribute("disabled");
		} 
	});
	var cardSeleccionado = document.getElementById("candidato"+id);
	cardSeleccionado.setAttribute("class", "card hoverable waves-effect waves-teal teal lighten-1");
	cardSeleccionado.setAttribute("disabled", "disabled");
	establecerCandidato(id);
	
}

function votar(){
	if (candidatoSeleccionado != ''){
		console.log(candidatoSeleccionado);
		respuesta = confirm('Confirme voto por '+candidatoSeleccionado.nombre);
		if (respuesta){
			// alert("Has votado por "+candidatoSeleccionado.nombre);
			location.href ="../pages/certificado-electoral.html";	
		}
	}else{
		alert("Debes seleccionar un candidato");
	}
}

function cancelar(){
	respuesta = confirm('¿Estas seguro que quires cancelar la votacion?');
	if (respuesta){
		location.href ="../index.html";
	}
}

function cargarCertificado(){
	var fecha = new Date();
	var pfecha = document.getElementById("fecha");
	pfecha.innerHTML = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+" - "+fecha.getUTCDay()+"/"+fecha.getDate()+"/"+fecha.getUTCFullYear();
}
