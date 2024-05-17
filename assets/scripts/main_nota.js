/* --------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE CAMBIAR EL LOGO | INICIO */
/* --------------------------------------------------------- */
function logo_cosas(id) {
    var imagen = document.getElementById(id);
    imagen.classList.add("animacion_girar");
    imagen.addEventListener("animationend", function(){
        imagen.classList.remove("animacion_girar");
    });
}

function cambiarImagenSegunFecha() {
    var ahora = new Date();
    var mes = ahora.getMonth() + 1; 

    if (mes == 11 && (ahora.getDate() == 1 || ahora.getDate() == 2)) {
        document.getElementById("imagen_ancla").src = "../assets/images/logo_halloween.webp";
    } 
    else if (mes == 12 && ahora.getDate() >= 1 && ahora.getDate() <= 25) {
        document.getElementById("imagen_ancla").src = "../assets/images/navidad.webp";
    } 
    else {
        document.getElementById("imagen_ancla").src = "../assets/images/logo.webp";
    }
}

window.onload = cambiarImagenSegunFecha;
/* --------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE CAMBIAR EL LOGO |  FINAL */
/* --------------------------------------------------------- */





/* --------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE ENLAZAR EL LOGO | INICIO */
/* --------------------------------------------------------- */
const imagenesLogo = document.querySelectorAll('.imagen_logo');

imagenesLogo.forEach((imagen) => {

    const enlace = document.createElement('a');
    
    enlace.href = 'index.html'; /* Sustituir este por el enlace final de la página de inicio */
    
    const imagenClonada = imagen.cloneNode(true);
    
    enlace.appendChild(imagenClonada);
    
    imagen.parentNode.replaceChild(enlace, imagen);
});
/* --------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE ENLAZAR EL LOGO |  FINAL */
/* --------------------------------------------------------- */





/* --------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE LA VENTANA EMERGENTE DE COMPARTIR | INICIO */
/* --------------------------------------------------------------------------- */
var urlActual = window.location.href;

var barraCopiar = document.querySelector('.barra_copiar');

barraCopiar.textContent = urlActual;

function copiarAlPortapapeles() {

var textoACopiar = document.querySelector('.barra_copiar').innerText;

var elementoTemporal = document.createElement('textarea');
elementoTemporal.value = textoACopiar;

document.body.appendChild(elementoTemporal);

elementoTemporal.select();
document.execCommand('copy');

document.body.removeChild(elementoTemporal);

var imagen = document.querySelector('.imagen_redes_sociales_compartir');

imagen.classList.replace('imagen_redes_sociales_compartir', 'nuevo_tono');

setTimeout(function() {
    imagen.classList.replace('nuevo_tono', 'imagen_redes_sociales_compartir');
}, 2000);
}

function compartirEnFacebook() {
    var urlPagina = encodeURIComponent(window.location.href);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + urlPagina, '_blank');
}

function compartirEnTwitter() {
    var urlPagina = encodeURIComponent(window.location.href);
    window.open('https://twitter.com/intent/tweet?url=' + urlPagina, '_blank');
}

function compartirEnInstagram() {
    var urlPagina = encodeURIComponent(window.location.href);
    window.open('https://www.instagram.com/?url=' + urlPagina, '_blank');
}

function compartirEnWhatsapp() {
    var urlPagina = encodeURIComponent(window.location.href);
    window.open('whatsapp://send?text=' + urlPagina, '_blank');
}

function compartirEnLinkedin() {
    var urlPagina = encodeURIComponent(window.location.href);
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + urlPagina, '_blank');
}

function precerrar(){
    document.getElementById('id_ventana_emergente').className = 'jello-horizontal';
    
    setTimeout(cerrar, 1000);
}

function cerrar() {
    document.getElementById('id_ventana_emergente').className = 'contenedor_emergente';

    var audio = new Audio('../assets/efects/pop.mp3');
    audio.oncanplaythrough = function() {
        audio.play();
    };

    document.getElementById("id_ventana_emergente").style.display = 'none';
}


function abrir_ventana_emergente(){
    document.getElementById("id_ventana_emergente").style.display = 'flex';
}
/* --------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE LA VENTANA EMERGENTE DE COMPARTIR |  FINAL */
/* --------------------------------------------------------------------------- */





/* --------------------------------------------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DEL DICTADO POR VOZ JUNTO A SUS CORRESPONDIENTES CONTROLADORES (BOTONES) | INICIO */
/* --------------------------------------------------------------------------------------------------------------- */
function cambiarClaseBotonActivo(botonId) {
    var botones = document.getElementsByClassName("boton_controladores");
    
    for (var i = 0; i < botones.length; i++) {
        if (botones[i].id === botonId) {
            botones[i].classList.add("boton_controladores_activo");
        } else {
            botones[i].classList.remove("boton_controladores_activo");
        }
    }
}

function obtenerContenidoParaDictado() {
    var contenido = '';
    var elementos = document.querySelectorAll('.texto_nota, .texto_nota_h1, .texto_nota_h2');/* Aquí agrega las clases de los textos que leerá el dictado por voz */
    elementos.forEach(function(elemento) {
        contenido += elemento.textContent.trim() + ' ';
    });
    return contenido;
}

function iniciarDictado() {
    document.getElementById("boton_pausa").style.display = "inline";
    document.getElementById("boton_reanudar").style.display = "inline";
    document.getElementById("boton_reiniciar").style.display = "inline";

    cambiarClaseBotonActivo("boton_voz");

    var contenido = obtenerContenidoParaDictado();

    if (contenido) {
        var mensaje = new SpeechSynthesisUtterance(contenido);

        window.speechSynthesis.speak(mensaje);
    }
}

function pausarDictado() {
    window.speechSynthesis.pause();
    cambiarClaseBotonActivo("boton_pausa");
}

function reanudarDictado() {
    window.speechSynthesis.resume();
    cambiarClaseBotonActivo("boton_reanudar");
}

function reiniciarDictado() {
    window.speechSynthesis.cancel();

    iniciarDictado();
}

document.getElementById("boton_voz").addEventListener("click", iniciarDictado);

document.getElementById("boton_pausa").addEventListener("click", pausarDictado);
document.getElementById("boton_reanudar").addEventListener("click", reanudarDictado);
document.getElementById("boton_reiniciar").addEventListener("click", reiniciarDictado);
/* --------------------------------------------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DEL DICTADO POR VOZ JUNTO A SUS CORRESPONDIENTES CONTROLADORES (BOTONES) |  FINAL */
/* --------------------------------------------------------------------------------------------------------------- */





/* -------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE LA BARRA DE PROGRESO | INICIO */
/* -------------------------------------------------------------- */
function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
}

window.addEventListener("scroll", updateProgressBar);
/* -------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE LA BARRA DE PROGRESO |  FINAL */
/* -------------------------------------------------------------- */





/* -------------------------------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE PONERLE LA MARCA DE AGUA CUANDO SE COPIA Y PEGA UN TEXTO | INICIO */
/* -------------------------------------------------------------------------------------------------- */
document.addEventListener('copy', function(e) {
    e.preventDefault();

    var selection = window.getSelection().toString();

    if (selection) {

        var markedText = selection + '\n\nMira más de nuestros artículos en https://revistacosas.mx/';

        e.clipboardData.setData('text/plain', markedText);
    }
});  
/* -------------------------------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DE PONERLE LA MARCA DE AGUA CUANDO SE COPIA Y PEGA UN TEXTO |  FINAL */
/* -------------------------------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */
/* ESTE CÓDIGO ES EL RESPONSABLE DEL MENÚ EN SU VERSIÓN PARA CELULAR | INICIO */
/* -------------------------------------------------------------------------- */
function menu_celular(){
    document.getElementById("id_contenedor_menu_celular").style.display = 'flex';
}

function cerrar_celular(){
    var audio = new Audio('../assets/efects/pop.mp3');
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