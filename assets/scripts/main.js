function logo_cosas(id) {
    var imagen = document.getElementById(id);
    imagen.classList.add("animacion_girar");
    imagen.addEventListener("animationend", function() {
        imagen.classList.remove("animacion_girar");
    });
}

/* HOLA SOY EL NUEVO SLIDER  | INICIO */
const circulos = document.querySelectorAll('.circulos');
const imagenPrincipal = document.querySelector('.imagen_principal');
const textoImagenPrincipal = document.querySelector('.texto_imagen_principal');
const descripcionImagenPrincipal = document.querySelector('.texto_imagen_principal_descripcion');
const imagenesOcultas = document.querySelectorAll('.imagen_oculta');
const numCirculos = circulos.length;
let indiceCirculo = 0;

function cambiarTamanioCirculos() {
    const siguienteCirculo = (indiceCirculo + 1) % numCirculos;

    circulos.forEach((circulo, index) => {
        circulo.style.width = index === indiceCirculo ? '20px' : '10px';
        circulo.style.height = index === indiceCirculo ? '20px' : '10px';
    });

    imagenPrincipal.style.opacity = '0';

    setTimeout(() => {
        const imagen = imagenesOcultas[indiceCirculo];
        imagenPrincipal.src = imagen.src;
        textoImagenPrincipal.textContent = imagen.getAttribute('data-titulo');
        descripcionImagenPrincipal.textContent = imagen.getAttribute('data-descripcion');
        imagenPrincipal.style.opacity = '1';
    }, 500);

    indiceCirculo = siguienteCirculo;

    setTimeout(cambiarTamanioCirculos, 5000);
}

cambiarTamanioCirculos();
/* HOLA SOY EL NUEVO SLIDER  |  FINAL */




const imagenesLogo = document.querySelectorAll('.imagen_logo');

imagenesLogo.forEach((imagen) => {

    const enlace = document.createElement('a');

    enlace.href = 'index.html'; /* Sustituir este por el enlace final de la página de inicio */

    const imagenClonada = imagen.cloneNode(true);

    enlace.appendChild(imagenClonada);

    imagen.parentNode.replaceChild(enlace, imagen);
});



function newsleterfuncion() {
    location.href = "https://whatsapp.com/channel/0029Va8xy5CISTkErjPEba3I";
}





/* -------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DEL MENÚ EN SU VERSIÓN PARA CELULAR | INICIO */
/* -------------------------------------------------------------------------- */
function menu_celular() {
    document.getElementById("id_contenedor_menu_celular").style.display = 'flex';
}

function cerrar_celular() {
    var audio = new Audio('assets/efects/pop.mp3');
    audio.oncanplaythrough = function() {
        audio.play();
    };

    // Agregar la clase de animación para el cierre
    var contenedorMenu = document.getElementById("id_contenedor_menu_celular");
    contenedorMenu.style.animation = 'cerrar_transicion_opacidad 0.25s linear';

    // Esperar a que termine la animación antes de ocultar el menú
    setTimeout(function() {
        contenedorMenu.style.display = 'none';
        // Reiniciar la animación para futuras aperturas del menú
        contenedorMenu.style.animation = '';
    }, 250); // La duración de la animación es de 0.25s, así que esperamos ese tiempo antes de ocultar el menú
}
/* -------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DEL MENÚ EN SU VERSIÓN PARA CELULAR |  FINAL */
/* -------------------------------------------------------------------------- */
