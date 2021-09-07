'use strict' //modo estricto, te muestra cuando tenes un error sin q lo corrija java y da mas funciones

var promedio = localStorage.getItem("prom");
var titulo = document.getElementById("titulo");
titulo.innerHTML = "Tu puntaje es de: " + promedio;
var texto = document.getElementById("texto");
if(promedio >= 7){
	texto.innerHTML = `
	FELICITACIONES BEBE, TE AMO MUCHISIMO Y PASATE ESTA PRUEBA!!!
	<br>
	Te extraño una banda y cuento los dias para verte <3
	`;
}else{
	texto.innerHTML = `
	Na gorda malisimo, volve a intentar que ya te estoy por abandonar
	`;
}


