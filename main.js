/*const ventana = document.querySelector('.tr.ventana');
const presentacion = document.querySelector('.tr.presentacion');
const escritura = document.querySelector('.tr.escritura');

let toggle = 0;



const escribe = (texto, tiempo, etiqueta) => {
    const caracteres = texto.split('');
    etiqueta.innerHTML = '';
    let contador = 0;
    const escribiendo = setInterval(function(){
        etiqueta.innerHTML += caracteres[contador];
        contador++;
        console.log(contador);
        if (contador === caracteres.length){
            clearInterval(escribiendo);
        }
    }, tiempo);
}

escribe("LUIS MANUEL TAPIA BAUTISTA", 100, escritura);
//escribe("LUIS MANUEL TAPIA BAUTISTA", 100, escritura);
escribe("\nIngeniero", 100, presentacion);

const cerrar = document.querySelector('.ventana.close');
const resize = document.querySelector('.ventana.resize');
const minimizar = document.querySelector('.ventana.minimizar');

cerrar.addEventListener("click", function (event) {
    ventana.style.display = "none";
});
resize.addEventListener("click", function (event) {
    if(toggle === 0){
        ventana.style.margin = "4rem 6rem";
        toggle=1;
    }else{
        ventana.style.margin = "4rem 1rem";
        toggle=0;
    }
});
minimizar.addEventListener("click", function (event) {
    ventana.style.display = "none";
});
*/




// Para fullpage
const seccionesPagina = new fullpage('#fullpage',{
    waterEffect: true,
    autoScrolling: true, // se activa el scroll
	fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    //Menu
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'skills', 'proyectos', 'estudios', 'sociales'],
    navigationTooltips: ['inicio', 'skills', 'proyectos', 'estudios', 'sociales'],
    showActiveTooltips: false,
    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});


// Modo oscuro
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

// Typed.js
const autor = new Typed('.autor', {
	strings: [
		'<i class="mascota">Luis Manuel Tapia Bautista </i>'
	],
	stringsElement: null,
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
    onComplete: (self) => {showCursor: false},
});
const typed = new Typed('.presentacion', {
	strings: [
		'<i class="mascota">Ingeniero en Sistemas Computacionales</i>',
		'<i class="mascota">Egresado TecNM en Celaya</i>',
		'<i class="mascota">Programación Web</i>',
		'<i class="mascota">Programación Móvil</i>',
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

