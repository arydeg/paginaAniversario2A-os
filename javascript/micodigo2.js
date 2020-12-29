'use strict' //modo estricto, te muestra cuando tenes un error sin q lo corrija java y da mas funciones

var promedio = localStorage.getItem("prom");
var titulo = document.getElementById("titulo");
titulo.innerHTML = "Tu puntaje es de: " + promedio;
var texto2 = document.getElementById("texto2");
if(promedio >= 7){
	texto2.innerHTML = `
	FELICITACIONES BEBE, TE AMO MUCHISIMO Y PASATE ESTA PRUEBA!!!
	<br>
	Te extraño una banda y cuento los dias para verte <3
	`;
}else{
	texto2.innerHTML = `
	Na gorda malisimo, volve a intentar que ya te estoy por abandonar
	`;
}


