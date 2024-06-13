/* ------------------------------------------------------------------------------------------------------------------------------------------- */
/* CÓDIGO PARA QUE EL WIDTH DEL CONTENEDOR DEL TITULO DE CADA SECCIÓN SIEMPRE SEA EL MISMO DEL CONTENEDOR DE LAS TARJETAS UNIVERSALES | INICIO */
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
var anchoContenedorTarjetas1 = document.getElementById('id_contenedor_tarjetas_universal_1').offsetWidth;
document.getElementById('id_contenedor_titulo_1').style.width = anchoContenedorTarjetas1 + 'px';

var anchoContenedorTarjetas1 = document.getElementById('id_contenedor_tarjetas_universal_2').offsetWidth;
document.getElementById('id_contenedor_titulo_2').style.width = anchoContenedorTarjetas1 + 'px';
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
/* CÓDIGO PARA QUE EL WIDTH DEL CONTENEDOR DEL TITULO DE CADA SECCIÓN SIEMPRE SEA EL MISMO DEL CONTENEDOR DE LAS TARJETAS UNIVERSALES |  FINAL */
/* ------------------------------------------------------------------------------------------------------------------------------------------- */





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
    var elementos = document.querySelectorAll('.h1_nota, .h2_nota, .h3_nota, .h4_nota, .h5_nota, .h6_nota, .p_nota, .a_nota');/* Aquí agrega las clases de los textos que leerá el dictado por voz */
    elementos.forEach(function(elemento) {
        contenido += elemento.textContent.trim() + ' ';
    });
    return contenido;
}

function iniciarDictado() {
    document.getElementById("boton_pausa").style.display = "flex";
    document.getElementById("boton_reanudar").style.display = "flex";
    document.getElementById("boton_reiniciar").style.display = "flex";

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





document.addEventListener('DOMContentLoaded', function() {
    // Captura el enlace de la página actual
    var currentPageLink = window.location.href;

    // Selecciona el div donde se pegará el enlace
    var divContenedor = document.querySelector('.input_campo');

    // Crea un elemento de texto con el enlace
    var enlaceTexto = document.createTextNode(currentPageLink);

    // Agrega el enlace al div
    divContenedor.appendChild(enlaceTexto);

    // Agrega un evento de clic al div para copiar el enlace
    divContenedor.addEventListener('click', function() {
        // Crea un área de texto temporal
        var tempTextArea = document.createElement('textarea');
        tempTextArea.value = currentPageLink;
        document.body.appendChild(tempTextArea);

        // Selecciona y copia el contenido del área de texto
        tempTextArea.select();
        document.execCommand('copy');

        // Elimina el área de texto temporal
        document.body.removeChild(tempTextArea);

        // Muestra un mensaje de éxito
        alert('Enlace copiado al portapapeles: ' + currentPageLink);
    });
});





function abrir_menu(){
    document.getElementById("menu_celular").style.display = "flex";
}

function cerrarmenu(){
    document.getElementById("menu_celular").style.display = "none";
}

function abrir_ventanaemergente(){
    document.getElementById("id_ventana_emergente").style.display = "flex";
}

function cerrarventanaemergente(){
    document.getElementById("id_ventana_emergente").style.display = "none";
}





function compartirEnFacebook() {
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
}

function compartirEnInstagram() {
    // Reemplaza 'URL_DE_TU_IMAGEN' con la URL de la imagen que deseas compartir
    var url = 'https://www.instagram.com/?url=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
}

function compartirEnMessenger() {
    var url = 'https://www.facebook.com/dialog/send?link=' + encodeURIComponent(window.location.href) + '&app_id=123456789';
    window.open(url, '_blank');
}

function compartirEnWhatsApp() {
    var url = 'whatsapp://send?text=' + encodeURIComponent(window.location.href);
    window.location.href = url;
}

function compartirPorCorreo() {
    var subject = '¡Mira esta página!';
    var body = 'Te recomiendo que visites esta página: ' + window.location.href;
    var mailtoLink = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}





AOS.init();



window.addEventListener('scroll', function() {
    // Calcular la altura total de la página
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    
    // Calcular cuánto ha sido desplazado el usuario
    var progress = (window.scrollY / totalHeight) * 100;
    
    // Actualizar el ancho de la barra de progreso
    document.getElementById('progress-bar').style.width = progress + '%';
});





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "flex"; // Muestra el botón cuando el usuario ha bajado 20px o más
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none"; // Oculta el botón cuando el usuario está en la parte superior de la página
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
});
