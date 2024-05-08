function logo_cosas(id) {
    var imagen = document.getElementById(id);
    imagen.classList.add("animacion_girar");
    imagen.addEventListener("animationend", function() {
        imagen.classList.remove("animacion_girar");
    });
}

function cambiarImagenSegunFecha() {
    var ahora = new Date();
    var mes = ahora.getMonth() + 1; 

    if (mes == 11 && (ahora.getDate() == 1 || ahora.getDate() == 2)) {
        document.getElementById("imagen_ancla").src = "assets/images/logo_halloween.webp";
    } 
    else if (mes == 12 && ahora.getDate() >= 1 && ahora.getDate() <= 25) {
        document.getElementById("imagen_ancla").src = "assets/images/navidad.webp";
    } 
    else {
        document.getElementById("imagen_ancla").src = "assets/images/logo.webp";
    }
}

window.onload = cambiarImagenSegunFecha;





const circulos = document.querySelectorAll('.circulos');
const imagenPrincipal = document.querySelector('.imagen_principal');
const textoImagenPrincipal = document.querySelector('.texto_imagen_principal');
const descripcionImagenPrincipal = document.querySelector('.texto_imagen_principal_descripcion');
const numCirculos = circulos.length;
let indiceCirculo = 0;

function cambiarTamanioCirculos() {
    const siguienteCirculo = (indiceCirculo + 1) % numCirculos;
    
    circulos.forEach((circulo, index) => {
        if (index === indiceCirculo) {
            circulo.style.width = '20px';
            circulo.style.height = '20px';
        } else {
            circulo.style.width = '10px';
            circulo.style.height = '10px';
        }
    });
    
    imagenPrincipal.style.opacity = '0';
    
    setTimeout(() => {
        switch (indiceCirculo) {
            case 0:
                imagenPrincipal.src = 'assets/images/big-city.webp';
                textoImagenPrincipal.textContent = 'tecnología';
                descripcionImagenPrincipal.textContent = 'Titulo de la nota perteneciente a la sección tecnología';
                break;
            case 1:
                imagenPrincipal.src = 'assets/images/hamster.webp';
                textoImagenPrincipal.textContent = 'tecnología';
                descripcionImagenPrincipal.textContent = 'Titulo de la nota perteneciente a la sección tecnología';
                break;
            case 2:
                imagenPrincipal.src = 'assets/images/big-city.webp';
                textoImagenPrincipal.textContent = 'sociales';
                descripcionImagenPrincipal.textContent = 'Titulo de la nota perteneciente a la sección sociales';
                break;
            case 3:
                imagenPrincipal.src = 'assets/images/hamster.webp';
                textoImagenPrincipal.textContent = 'entretenimiento';
                descripcionImagenPrincipal.textContent = 'Titulo de la nota perteneciente a la sección entretenimiento';
                break;
            case 4:
                imagenPrincipal.src = 'assets/images/big-city.webp';
                textoImagenPrincipal.textContent = 'mascotas';
                descripcionImagenPrincipal.textContent = 'Titulo de la nota perteneciente a la sección mascotas';
                break;
            default:
                // Espacio para agregar más secciones al carrusel del inicio
                break;
        }

        imagenPrincipal.style.opacity = '1';
    }, 500); 
    
    indiceCirculo = siguienteCirculo;
    
    setTimeout(cambiarTamanioCirculos, 5000);
}

cambiarTamanioCirculos();


const imagenesLogo = document.querySelectorAll('.imagen_logo');

imagenesLogo.forEach((imagen) => {

    const enlace = document.createElement('a');
    
    enlace.href = 'index.html'; /* Sustituir este por el enlace final de la página de inicio */
    
    const imagenClonada = imagen.cloneNode(true);
    
    enlace.appendChild(imagenClonada);
    
    imagen.parentNode.replaceChild(enlace, imagen);
});



function cerrar_celular(){
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


function menu_celular(){
    document.getElementById("id_contenedor_menu_celular").style.display = 'flex';
}