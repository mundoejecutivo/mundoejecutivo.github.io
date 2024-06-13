/* ---------------------------------------------------------------------- */
/* CÓDIGO PARA PONERLE BOLD A LAS DIAGONALES "/" DE LAS TARJETAS | INICIO */
/* ---------------------------------------------------------------------- */
var contenedor = document.querySelector('.contenedor_categorias');

var texto = contenedor.textContent.trim();

if (texto === '/') {
    contenedor.style.fontWeight = 'bold';
}
/* ---------------------------------------------------------------------- */
/* CÓDIGO PARA PONERLE BOLD A LAS DIAGONALES "/" DE LAS TARJETAS |  FINAL */
/* ---------------------------------------------------------------------- */





/* ------------------------------------------------------------------------------------------------------------------------------------------- */
/* CÓDIGO PARA QUE EL WIDTH DEL CONTENEDOR DEL TITULO DE CADA SECCIÓN SIEMPRE SEA EL MISMO DEL CONTENEDOR DE LAS TARJETAS UNIVERSALES | INICIO */
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
var anchoContenedorTarjetas1 = document.getElementById('id_contenedor_tarjetas_universal_1').offsetWidth;
document.getElementById('id_contenedor_titulo_1').style.width = anchoContenedorTarjetas1 + 'px';



var anchoContenedorTarjetas2 = document.getElementById('id_contenedor_tarjetas_universal_2').offsetWidth;
document.getElementById('id_contenedor_titulo_2').style.width = anchoContenedorTarjetas2 + 'px';



var anchoContenedorTarjetas3 = document.getElementById('id_contenedor_tarjetas_universal_3').offsetWidth;
document.getElementById('id_contenedor_titulo_3').style.width = anchoContenedorTarjetas3 + 'px';



var anchoContenedorTarjetas4 = document.getElementById('id_contenedor_tarjetas_universal_3').offsetWidth;
document.getElementById('id_contenedor_titulo_4').style.width = anchoContenedorTarjetas4 + 'px';



var anchoContenedorTarjetas4 = document.getElementById('id_contenedor_tarjetas_universal_3').offsetWidth;
document.getElementById('id_contenedor_tarjetas_universal_4').style.width = anchoContenedorTarjetas4 + 'px';



var anchoContenedorTarjetas3 = document.getElementById('id_contenedor_tarjetas_universal_5').offsetWidth;
document.getElementById('id_contenedor_titulo_5').style.width = anchoContenedorTarjetas3 + 'px';



var anchoContenedorTarjetas3 = document.getElementById('id_contenedor_tarjetas_universal_6').offsetWidth;
document.getElementById('id_contenedor_titulo_6').style.width = anchoContenedorTarjetas3 + 'px';
/* ------------------------------------------------------------------------------------------------------------------------------------------- */
/* CÓDIGO PARA QUE EL WIDTH DEL CONTENEDOR DEL TITULO DE CADA SECCIÓN SIEMPRE SEA EL MISMO DEL CONTENEDOR DE LAS TARJETAS UNIVERSALES |  FINAL */
/* ------------------------------------------------------------------------------------------------------------------------------------------- */









// Obtener referencias a las imágenes principal y pequeñas
const imagenPrincipal = document.querySelector('.imagen_principal');
const imagenesPequenas = document.querySelectorAll('.imagen_rellenar');

let index = 0;

// Función para cambiar la imagen principal
function cambiarImagenPrincipal() {
    // Obtener la URL de la imagen pequeña actual
    const nuevaImagenURL = imagenesPequenas[index].src;
    
    // Actualizar la imagen principal con la URL de la imagen pequeña
    imagenPrincipal.src = nuevaImagenURL;
    
    // Incrementar el índice o volver al principio si llegamos al final
    index = (index + 1) % imagenesPequenas.length;
}

// Ejecutar la función cada 5 segundos
setInterval(cambiarImagenPrincipal, 5000);





function abrir_menu(){
    document.getElementById("menu_celular").style.display = "flex";
}

function cerrarmenu(){
    document.getElementById("menu_celular").style.display = "none";
}

AOS.init();