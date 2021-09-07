'use strict' //modo estricto, te muestra cuando tenes un error sin q lo corrija java y da mas funciones

var cont = 1;
var puntos = 0;
var promedio = 0;

var txt = document.getElementById("texto");

var btnTrue = document.querySelector("#true");
var btnFalse = document.querySelector("#false");


var texto1 = `									
	Mi color favorito es el Naranja
`;
var texto2 = `									
	Mi instagram es @arydeg
`;
var texto3 = `									
	Mi pelicula favorita es "Terror en Chernovil"
`;
var texto4 = `									
	Me facina apretarte
`;
var texto5 = `									
	De chiquito me llamaban chupetin por tener la cabeza grande y el cuerpo chiquito
`;
var texto6 = `									
	Mi pose favorita es vos abajo y yo arriba
`;
var texto7 = `									
	Me gustaria tener 3 hijos
`;
var texto8 = `									
	Nuestro primer beso fue en la flor de Buenos Aires
`;
var texto9 = `									
	Me gustaria tener 2 hijos
`;
var texto10 = `									
	Lo que mas me gusta de vos es tu naricita
`;
var texto11 = `									
	Tengo una marca de nacimiento en el tobillo izquierdo
`;
var texto12 = `									
	Mi cepillo de dientes es de color verde
`;
var texto13 = `									
	Si pudiera ir al pasado hubiera entrado con vos a el boliche en donde nos conocimos
`;
var texto14 = `									
	No hay algo que me moleste mas que griten o que me cacheteen sarcasticamente
	`;
var texto15 = `									
	Me gusta el picante
`;
var texto16 = `									
	Me gusta ser picante
`;
var texto17 = `									
	Si pudiera comprarme un auto sin importar el precio me compraria un Ferrari
`;
var texto18 = `									
	Mi signo del sodiaco es un leon
`;
var texto19 = `									
	En la parte de atras de mi celu tengo un sticker de "rick and morty" y otro de "Newton"
`;
var texto20 = `									
	El amor que te tengo es infinitamente grande
`;

//ingreso el primer texto
txt.innerHTML = texto1;

//realizo funcion de botones
function falso(){
	if(cont==2||cont==3||cont==5||cont==6||cont==7||cont==8||cont==10||cont==11||cont==13||cont==17||cont==19){
		alert("ESA ES MI CHICA! CORRECTO");
		puntos = puntos + 1;
	}else{
		alert("MALA NOVIA!!! ERROR");
	}
	console.log(puntos);
	cambiarPagina();
}

function verdadero(){
	if(cont==1||cont==4||cont==9||cont==12||cont==14||cont==15||cont==16||cont==18||cont==20){
		alert("ESA ES MI CHICA! CORRECTO");
		puntos = puntos + 1;
	}else{
		alert("MALA NOVIA!!! ERROR");
	}
	console.log(puntos);
	cambiarPagina();
}

function cambiarPagina(){
	cont++;
	switch(cont){
		case 2:
			txt.innerHTML = texto2;
		break;
		case 3:
			txt.innerHTML = texto3;
		break;
		case 4:
			txt.innerHTML = texto4;
		break;
		case 5:
			txt.innerHTML = texto5;
		break;
		case 6:
			txt.innerHTML = texto6;
		break;
		case 7:
			txt.innerHTML = texto7;
		break;
		case 8:
			txt.innerHTML = texto8;
		break;
		case 9:
			txt.innerHTML = texto9;
		break;
		case 10:
			txt.innerHTML = texto10;
		break;
		case 11:
			txt.innerHTML = texto11;
		break;
		case 12:
			txt.innerHTML = texto12;
		break;
		case 13:
			txt.innerHTML = texto13;
		break;
		case 14:
			txt.innerHTML = texto14;
		break;
		case 15:
			txt.innerHTML = texto15;
		break;
		case 16:
			txt.innerHTML = texto16;
		break;
		case 17:
			txt.innerHTML = texto17;
		break;
		case 18:
			txt.innerHTML = texto18;
		break;
		case 19:
			txt.innerHTML = texto19;
		break;
		case 20:
			txt.innerHTML = texto20;
		break;
		case 21: //final
		    let c = cont-1
			promedio = puntos*10/c;
			localStorage.setItem("prom",promedio);
			window.location.href = "fin2712.html";
		break;
	}
}


