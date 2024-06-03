window.addEventListener('scroll', function() {
    var contenedor = document.getElementById('mi-contenedor');
    if (window.scrollY > 1) { // si la pantalla se ha desplazado más de 10px
        contenedor.classList.add('fondo-azul');
    } else {
        contenedor.classList.remove('fondo-azul');
    }
});

function menu() {
    var menu = document.getElementById('id_menu');
    menu.style.display = 'flex'; // Primero, asegúrate de que el contenedor esté visible para que la transición de opacidad funcione
    setTimeout(function() {
        menu.style.opacity = '1'; // Establece la opacidad a 1 después de un breve retraso para permitir que la transición se active
    }, 10); // Ajusta según sea necesario
}


function cerrar_menu() {
    var menu = document.getElementById('id_menu');
    menu.style.opacity = '0';
    setTimeout(function() {
        menu.style.display = 'none';
    }, 300); // Tiempo en milisegundos, ajusta según tu preferencia y duración de la transición
}





document.addEventListener("DOMContentLoaded", function() {
    var imagenes = [
        "assets/images/imagen_cumbre1000_1.jpeg",
        "assets/images/imagen_cumbre1000_2.jpeg",
        "assets/images/imagen_cumbre1000_3.jpeg",
        "assets/images/imagen_cumbre1000_4.jpeg",
        "assets/images/imagen_cumbre1000_5.jpeg"
    ]; // Lista de nombres de archivo de imágenes
    var textos = [{
            titulo: "CUMBRE 1000",
            descripcion: "¡Únete a la Cumbre de las 1000 Empresas Más Grandes de México y sé parte de un evento excepcional donde la innovación y las oportunidades se fusionan para impulsar el crecimiento empresarial! Conéctate con líderes visionarios y aprende de las mejores prácticas en el mundo empresarial. ¡No te lo pierdas!",
            boton: "ASISTIR",
            enlace: "files/asistir.html"
        },
        {
            titulo: "UBICACIÓN",
            descripcion: "¡La Cumbre 1000 te espera en [AQUÍ VA LA UBICACIÓN DEL EVENTO]! Únete a nosotros en este escenario emblemático para ser parte de una experiencia inolvidable. ¡Reserva tu lugar ahora!",
            boton: "UBICACIÓN",
            enlace: "files/mapa.html"
        },
        {
            titulo: "PATROCINAR",
            descripcion: "¡Conviértete en patrocinador de la Cumbre 1000! Únete a nosotros para ser parte de un evento transformador que reúne a líderes globales y agentes de cambio. Conviértete en patrocinador y destaca tu marca ante una audiencia comprometida con la construcción de un futuro sostenible. ¡Únete a nosotros y haz que tu marca sea parte de esta experiencia única!",
            boton: "PATROCINAR",
            enlace: "files/patrocinar.html"
        },
        {
            titulo: "AGENDA",
            descripcion: "¡No te pierdas la Cumbre 1000! Descubre todo lo que ofrecemos en nuestra agenda llena de paneles, conferencias y talleres sobre los temas más urgentes de nuestro tiempo. ¡Consulta ahora y asegura tu lugar!",
            boton: "AGENDA",
            enlace: "files/agenda.html"
        },
        {
            titulo: "PANELISTAS",
            descripcion: "¡Descubre a nuestros panelistas estelares en la Cumbre 1000! Conoce a líderes visionarios y expertos innovadores que compartirán su sabiduría. ¡No te pierdas la oportunidad de aprender de los mejores!",
            boton: "PANELISTAS",
            enlace: "#id_section_panelistas"
        }
    ]; // Lista de textos correspondientes a las imágenes
    var index = 0; // Índice actual de la imagen

    // Función para cambiar la imagen y el texto cada 3 segundos
    setInterval(function() {
        index = (index + 1) % imagenes.length; // Avanza al siguiente índice o vuelve al primero si es el último
        var imagen = document.querySelector('.imagen-principal');
        imagen.src = imagenes[index]; // Cambia la fuente de la imagen
        actualizarTexto(index); // Llama a la función para actualizar el texto
        actualizarCirculos(index); // Llama a la función para actualizar los círculos
    }, 5000);

    // Función para actualizar el texto
    function actualizarTexto(index) {
        var tituloElement = document.querySelector('.texto-bienvenida-titulo');
        var descripcionElement = document.querySelector('.texto-bienvenida-descripcion');
        var botonElement = document.querySelector('.boton-principal');
        var enlaceElement = document.querySelector('.as');

        // Cambia el texto
        tituloElement.textContent = textos[index].titulo;
        descripcionElement.textContent = textos[index].descripcion;
        botonElement.textContent = textos[index].boton;
        enlaceElement.href = textos[index].enlace;

    }

    // Función para actualizar los círculos
    function actualizarCirculos(index) {
        var circulos = document.querySelectorAll('.circulo');

        // Remueve la clase 'circulo-activo' de todos los círculos
        circulos.forEach(function(circulo) {
            circulo.classList.remove('circulo-activo');
        });

        // Agrega la clase 'circulo-activo' al círculo correspondiente al índice actual
        circulos[index].classList.add('circulo-activo');
    }

    // Llama a la función para actualizar el texto y los círculos al cargar la página
    actualizarTexto(index);
    actualizarCirculos(index);
});





AOS.init();







fetch('assets/json/package.json')
    .then(response => response.json())
    .then(data => {
        const panelistas = data.panelistas;

        // Seleccionar el contenedor donde se agregarán las tarjetas
        const contenedor = document.querySelector('.fondo-azul-section ');

        // Generar las tarjetas HTML dinámicamente
        panelistas.forEach(panelista => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-panelistas');
            tarjeta.setAttribute('data-aos', 'zoom-in'); // Agregar el atributo data-aos

            const seccion1 = document.createElement('div');
            seccion1.classList.add('tarjeta-panelistas_seccion-1');
            const imagen = document.createElement('img');
            imagen.src = panelista.imagen;
            imagen.alt = panelista.nombre;
            imagen.classList.add('imagen-panelista');
            seccion1.appendChild(imagen);
            tarjeta.appendChild(seccion1);

            const seccion2 = document.createElement('div');
            seccion2.classList.add('tarjeta-panelistas_seccion-2');
            const nombre = document.createElement('p');
            nombre.classList.add('texto-nombre-panelista');
            nombre.textContent = panelista.nombre;
            const cargo = document.createElement('p');
            cargo.classList.add('texto-nombre-cargo');
            cargo.textContent = panelista.cargo;
            seccion2.appendChild(nombre);
            seccion2.appendChild(cargo);
            tarjeta.appendChild(seccion2);

            contenedor.appendChild(tarjeta);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));








    function quees_section_1(){
        document.getElementById('id_quees_section_1').style.display = 'flex';
        document.getElementById('id_quees_section_2').style.display = 'none';
        document.getElementById('id_quees_section_3').style.display = 'none';
    }

    function quees_section_2(){
        document.getElementById('id_quees_section_1').style.display = 'none';
        document.getElementById('id_quees_section_2').style.display = 'flex';
        document.getElementById('id_quees_section_3').style.display = 'none';
    }

    function quees_section_3(){
        document.getElementById('id_quees_section_1').style.display = 'none';
        document.getElementById('id_quees_section_2').style.display = 'none';
        document.getElementById('id_quees_section_3').style.display = 'flex';

        document.getElementById('id_quees_section_temas').style.width = '50%';
    }






    function queincluye(){
        document.getElementById('id_a_un_clic_1').style.display = 'flex';
        document.getElementById('id_a_un_clic_2').style.display = 'none';
        document.getElementById('id_a_un_clic_3').style.display = 'none';
    }

    function queconsigo(){
        document.getElementById('id_a_un_clic_1').style.display = 'none';
        document.getElementById('id_a_un_clic_2').style.display = 'flex';
        document.getElementById('id_a_un_clic_3').style.display = 'none';
    }
