/* PROGRAMACION */
const ul_dias = document.getElementById('ul_dias');
const listaDeDias = document.getElementsByClassName('dia');

/* Obtener dia y hora actual */
const fecha = new Date();
const dia = fecha.getDay();
const hora = fecha.getHours();
const minutos = fecha.getMinutes() / 100;
horaActual = hora + minutos;

/* Le asigna al día actual los estilos */
listaDeDias[dia].classList.add('activo');

/* Le asigana al día seleccionado por el usuario los estilos */
ul_dias.addEventListener('click', (e) => {
	/* console.log(e.target.id); */

	if (e.target.classList.contains('dia')) {
		for (let i = 0; i < listaDeDias.length; i++) {
			if (listaDeDias[i].classList.contains('activo')) {
				listaDeDias[i].classList.remove('activo');
			}
		}
		e.target.classList.add('activo');
		while (programas.children.length) {
			programas.removeChild(programas.children[0]);
		}
		/*  */
		while (modals.children.length) {
			modals.removeChild(modals.children[0]);
		}

		/*  */
		escribirProgramacionDiaria(e.target.id);
	}
});



/* Programación de ZappaRadio */
const programacion = [
	{
		dia: 'domingo',
		programas: [
			{ nombre: 'Programa 1 Domingo', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Domingo', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Domingo', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Lunes', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
	{
		dia: 'Lunes',
		programas: [
			{ nombre: 'Programa 1 Lunes', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Lunes', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Lunes', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Lunes', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
	{
		dia: 'Martes',
		programas: [
			{ nombre: 'Programa 1 Martes', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Martes', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Martes', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Martes', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
	{
		dia: 'Miércoles',
		programas: [
			{ nombre: 'Programa 1 Miécoles', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Miécoles', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Miécoles', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Miécoles', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
	{
		dia: 'Jueves',
		programas: [
			{ nombre: 'Programa 1 Jueves', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Jueves', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Jueves', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Jueves', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4.' },
		]
	},
	{
		dia: 'Viernes',
		programas: [
			{ nombre: 'Programa 1 Viernes', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Viernes', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Viernes', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Viernes', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
	{
		dia: 'Sábado',
		programas: [
			{ nombre: 'Programa 1 Sábado', de: 0, a: 5.59, descripcion: 'Descripcion del programa 1' },
			{ nombre: 'Programa 2 Sábado', de: 6, a: 6.25, descripcion: 'Descripcion del programa 2' },
			{ nombre: 'Programa 3 Sábado', de: 6.26, a: 17.59, descripcion: 'Descripcion del programa 3' },
			{ nombre: 'Programa 4 Sábado', de: 18, a: 23.59, descripcion: 'Descripcion del programa 4' },
		]
	},
];

/* Obtener programa en vivo */
const obtenerProgramaActual = (dia, hora) => {
	for (let i = 0; i < programacion[dia].programas.length; i++) {
		if (hora >= programacion[dia].programas[i].de && hora <= programacion[dia].programas[i].a) {
			const programaActualNombre = programacion[dia].programas[i].nombre;
			const programaActualDescripcion = programacion[dia].programas[i].descripcion;
			const programaActualDe = programacion[dia].programas[i].de;
			const programaActualA = programacion[dia].programas[i].a;
			return [programaActualNombre, programaActualDescripcion, programaActualDe, programaActualA];
		}
	}
	console.log('No se pudo detectar el programa en vivo - Revise su base de datos');
};
const [programaActualNombre, programaActualDescripcion, programaActualDe, programaActualA] = obtenerProgramaActual(dia, hora);

/* Escribir programa actual (en vivo) */
const programaEnVivoEscribir = document.getElementById('programa-en-vivo-escribir');
programaEnVivoEscribir.innerHTML = `<h3>${programaActualNombre}</h3>`;

/* Obtener programación del día */
const programas = document.getElementById('programas');
const modals = document.getElementById('modals');
const escribirProgramacionDiaria = (dia) => {
	for (let i = 0; i < programacion[dia].programas.length; i++) {
		const fragment = new DocumentFragment;
		const divPrograma = document.createElement('div');
		divPrograma.setAttribute('class', 'programa');
		fragment.appendChild(divPrograma);

		const divProgramaTexto = document.createElement('div');
		divProgramaTexto.setAttribute('class', 'programa_texto');
		fragment.children[0].appendChild(divProgramaTexto);

		const plus = document.createElement('div');
		plus.setAttribute('class', 'programa_plus');
		fragment.children[0].appendChild(plus);

		const h2 = document.createElement('h2');
		h2.textContent = `de ${programacion[dia].programas[i].de} a ${programacion[dia].programas[i].a}`;
		fragment.children[0].firstChild.appendChild(h2);
		const h3 = document.createElement('h3');
		h3.textContent = programacion[dia].programas[i].nombre;
		fragment.children[0].firstChild.appendChild(h3);

		const icon = document.createElement('i');
		icon.setAttribute('class', 'fas fa-plus');
		icon.setAttribute('id', `programa-${i}`);
		fragment.children[0].lastChild.appendChild(icon);

		programas.appendChild(fragment); /* IMPORTANTE */

		const divModal = document.createElement('div');
		divModal.setAttribute('class', 'modal-contenido');
		divModal.setAttribute('id', `modal-contenido-${i}`);
		fragment.appendChild(divModal);

		const spanCerrar = document.createElement('span');
		spanCerrar.setAttribute('class', 'cerrar');
		spanCerrar.setAttribute('id', `cerrar-${i}`);
		spanCerrar.innerHTML = `&times;`;
		fragment.children[0].appendChild(spanCerrar);

		const texto = document.createElement('p');
		texto.textContent = programacion[dia].programas[i].descripcion;
		fragment.children[0].appendChild(texto);

		modals.appendChild(fragment);

		document.getElementById(`programa-${i}`).addEventListener('click', (e) => {
			/* console.log(modals.children[i]); */
			modals.style.display = "block";
			modals.children[i].style.display = "block";
		});
		document.getElementById(`cerrar-${i}`).addEventListener('click', () => {
			modals.style.display = "none";
			modals.children[i].style.display = "none";
		});
		window.addEventListener('click', (e) => {
			if (e.target == modals) {
				modals.style.display = "none";
				modals.children[i].style.display = "none";
			}
		});
	}
};

const disclaimer = document.getElementById('disclaimer');
const modalDisclaimer = document.getElementById('modal-disclaimer');
const modalContenidoDisclaimer = document.getElementById('modal-contenido-disclaimer');
const cerrarDisclaimer = document.getElementById('cerrar-disclaimer');

disclaimer.addEventListener('click', () => {
	modalDisclaimer.style.display = "block";
	modalContenidoDisclaimer.style.display = "block";
});

cerrarDisclaimer.addEventListener('click', () => {
	modalDisclaimer.style.display = "none";
	modalContenidoDisclaimer.style.display = "none";
});
window.addEventListener('click', (e) => {
	if (e.target == modalDisclaimer) {
		modalDisclaimer.style.display = "none";
		modalContenidoDisclaimer.style.display = "none";
	}
});


/* MENU HAMBURGUESA */
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
let menuOpen = false;
let navOpen = false;
menu.addEventListener('click', () => {
	if (!menuOpen) {
		menu.classList.add('open');
		menu.classList.add('open2');
		nav.classList.add('open');
		menuOpen = true;
		navOpen = true;
	} else {
		menu.classList.remove('open');
		menu.classList.remove('open2');
		nav.classList.remove('open');
		menuOpen = false;
		navOpen = false;
	}
});

/* REPRODUCTOR DESPLEGABLE, PLAY y STOP */
const player = document.getElementById('player');
const desplegarLista = document.getElementById('desplegar-lista');
const main = document.getElementById('main');
let listaDesplegada = false;
desplegarLista.addEventListener('click', () => {
	if (!listaDesplegada) {
		player.classList.add('desplegar-lista');
		player.classList.add('rota-before');
		if (window.screen.width < 768) {
			main.classList.add('bajar-opacidad');
		}

		if (window.screen.width > 767) { /*  */
			main.classList.add('rota-fondo');
		}

		listaDesplegada = true;
		console.log('Dejá de darle al botoncito...');
	} else {
		player.classList.remove('desplegar-lista');
		player.classList.remove('rota-before');
		listaDesplegada = false;
		main.classList.remove('bajar-opacidad');
		main.classList.remove('rota-fondo');
		console.log('Dejá de darle al botoncito...');
	}
});
const audio = document.getElementById('audio');
const volumen = document.getElementById('volumen');
const playBoton = document.getElementById('play');
const stopBoton = document.getElementById('stop');
playOn = false;
stopOn = true;
let source = 'http://one.cloudstreaming.eu:9090/stream';
playBoton.addEventListener('click', () => {
	if (!playOn) {
		player.classList.add('play-on');
		player.classList.remove('play-off');
		playOn = true;
		stopOn = false;
		audio.src = source;
		audio.play();
	}
});
stopBoton.addEventListener('click', () => {
	if (!stopOn) {
		player.classList.remove('play-on');
		player.classList.add('play-off');
		playOn = false;
		stopOn = true;
		audio.src = "";
	}
});
audio.volume = 0.5;
volumen.addEventListener("change", function (e) {
	audio.volume = e.currentTarget.value / 100;
});

/* API DE CANCIÓN ACTUAL, LISTA DE CANCIONES REPRODUCIDAS Y PROGRAMACIÓN ACTUAL */

/* Obtener cancion actual y artista */
const cancionArtista = document.getElementById('cancion-artista');
const API_CANCION_ACTUAL = 'https://one.cloudstreaming.eu:2199/rpc/robert/streaminfo.get';
const pedirCancionActual = (url) => {
	fetch(url)
		.then(data => data.json())
		.then(cancion => {

			cancionArtista.innerHTML = `<h2>${cancion.data[0].track.title}</h2>
        <h3>(${cancion.data[0].track.artist})</h3>`;
		});
};

/* Obtener lista histórica de temas  */
const API_LISTA_TEMAS = 'https://one.cloudstreaming.eu:2199/recentfeed/robert/json/';
const listaTemas = document.getElementById('lista-de-canciones-escribir');
const pedirListaTemas = (url) => {
	fetch(url)
		.then(data => data.json())
		.then(lista => {
			const arrLista = [];
			for (let index = 0; index < lista.items.length; index++) {
				if (!(lista.items[index].title.includes('RADIO'))) {
					arrLista.push((lista.items[index].title).split('-')[1]);
				}
			}
			listaTemas.innerHTML = `<h3>1) ${arrLista[0]}</h3>
        <h3>2) ${arrLista[1]}</h3>
        <h3>3) ${arrLista[2]}</h3>
        <h3>4) ${arrLista[3]}</h3>
        <h3>5) ${arrLista[4]}</h3>`;
		});
};

/* API DE CLIMA */
const tiempoIcono = document.getElementById('tiempo-icon');
const tiempoDatos = document.getElementById('tiempo-datos');
const API_CLIMA = 'http://api.openweathermap.org/data/2.5/weather?q=montevideo,uy&lang=es&units=metric&APPID=7d9e9ae9c4c837132ca1974634716081';
const pedirClima = (url) => {
	fetch(url)
		.then(data => data.json())
		.then(clima => {
			let ciudad = clima.name;
			let pais = clima.sys.country;
			let temperatura = Math.round(clima.main.temp * 10) / 10;
			let temperaturaDescripcion = clima.weather[0].description;
			let icono = clima.weather[0].icon;

			/* Escribir datos */
			tiempoIcono.innerHTML = `<img src="http://openweathermap.org/img/wn/${icono}@2x.png" alt="">`;
			tiempoDatos.innerHTML = `<h1>${ciudad}, ${pais}</h1>
        <h2>${temperatura}°</h2>
        <h3>${temperaturaDescripcion}`;
		})
		.catch(error => alert(`Tu navegador no es compatible con todas funciones necesarias! ${error}`));
};



/* API PESO URUGUAYO */
const API_PESO_UY = 'https://cotizaciones-brou.herokuapp.com/api/currency/latest';
const pedirCotizacion = (url) => {
	fetch(url)
		.then(data => data.json())
		.then(cotizacion => {
			let ARGCompra = cotizacion.rates.ARS.buy;
			let ARGVenta = cotizacion.rates.ARS.sell;
			let USDCompra = cotizacion.rates.USD.buy;
			let USDVenta = cotizacion.rates.USD.sell;

			let monedaARG = document.getElementById('moneda-ARG');
			let cotizacionARG = document.getElementById('cotizacion-datos-ARG');
			let monedaUSD = document.getElementById('moneda-USD');
			let cotizacionUSD = document.getElementById('cotizacion-datos-USD');

			/* Escribir datos */
			monedaARG.innerHTML = `<span>ARG</span>`;
			cotizacionARG.innerHTML = `<h1>${ARGCompra} - Compra </h1>
        <h1>${ARGVenta} - Venta</h1>`;
			monedaUSD.innerHTML = `<span class="dolar">USD</span>`;
			cotizacionUSD.innerHTML = `<h1>${USDCompra} - Compra </h1>
        <h1>${USDVenta} - Venta</h1>`;
		});
};

escribirProgramacionDiaria(dia);
pedirClima(API_CLIMA);
pedirCotizacion(API_PESO_UY);
pedirCancionActual(API_CANCION_ACTUAL);
pedirListaTemas(API_LISTA_TEMAS);
setInterval(() => {
	pedirCancionActual(API_CANCION_ACTUAL);
	pedirListaTemas(API_LISTA_TEMAS);
}, 20000);
