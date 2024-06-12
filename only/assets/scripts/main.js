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









AOS.init();
