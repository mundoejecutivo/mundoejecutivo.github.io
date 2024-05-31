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
            boton: "ASISTIR"
        },
        {
            titulo: "UBICACIÓN",
            descripcion: "¡La Cumbre 1000 te espera en [AQUÍ VA LA UBICACIÓN DEL EVENTO]! Únete a nosotros en este escenario emblemático para ser parte de una experiencia inolvidable. ¡Reserva tu lugar ahora!",
            boton: "UBICACIÓN"
        },
        {
            titulo: "PATROCINAR",
            descripcion: "¡Conviértete en patrocinador de la Cumbre 1000! Únete a nosotros para ser parte de un evento transformador que reúne a líderes globales y agentes de cambio. Conviértete en patrocinador y destaca tu marca ante una audiencia comprometida con la construcción de un futuro sostenible. ¡Únete a nosotros y haz que tu marca sea parte de esta experiencia única!",
            boton: "PATROCINAR"
        },
        {
            titulo: "AGENDA",
            descripcion: "¡No te pierdas la Cumbre 1000! Descubre todo lo que ofrecemos en nuestra agenda llena de paneles, conferencias y talleres sobre los temas más urgentes de nuestro tiempo. ¡Consulta ahora y asegura tu lugar!",
            boton: "AGENDA"
        },
        {
            titulo: "PANELISTAS",
            descripcion: "¡Descubre a nuestros panelistas estelares en la Cumbre 1000! Conoce a líderes visionarios y expertos innovadores que compartirán su sabiduría. ¡No te pierdas la oportunidad de aprender de los mejores!",
            boton: "PANELISTAS"
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

        // Cambia el texto
        tituloElement.textContent = textos[index].titulo;
        descripcionElement.textContent = textos[index].descripcion;
        botonElement.textContent = textos[index].boton;
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








var coverflow = $("#coverflow").flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle

    fadeIn: 400,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup

    loop: true,
    // [true|false]
    // Loop around when the start or end is reached

    autoplay: 5000,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered

    style: 'coverflow',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class

    spacing: -0.6,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

    click: true,
    // [true|false]
    // Clicking an item switches to that item

    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation

    scrollwheel: true,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices

    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

    buttons: false,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button

    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button

    onItemSwitch: false
        // [function]
        // Callback function when items are switched
        // Arguments received: [currentItem, previousItem]
});

var myFlipster = $('.my-flipster').flipster(); // It's best to store the element as a variable for easy reference.

myFlipster.flipster('next'); // Next item
myFlipster.flipster('prev'); // Previous item
myFlipster.flipster('jump', 0); // Jump to a specific index
myFlipster.flipster('jump', $('.my-item')); // Jump to a specific item
myFlipster.flipster('play'); // Resume autoplay
myFlipster.flipster('play', 5000); // Set autoplay duration
myFlipster.flipster('pause'); // Pause the autoplay until next jump
myFlipster.flipster('stop'); // Stop the autoplay entirely
myFlipster.flipster('index'); // If items are added or removed, you can tell Flipster to reindex


var coverflow = $("#coverflow2").flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.

    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip

    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle

    fadeIn: 400,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup

    loop: true,
    // [true|false]
    // Loop around when the start or end is reached

    autoplay: 5000,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds

    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered

    style: 'coverflow',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class

    spacing: -0.6,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap

    click: true,
    // [true|false]
    // Clicking an item switches to that item

    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation

    scrollwheel: true,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next

    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices

    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items

    buttons: false,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`

    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button

    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button

    onItemSwitch: false
        // [function]
        // Callback function when items are switched
        // Arguments received: [currentItem, previousItem]
});

var myFlipster = $('.my-flipster').flipster(); // It's best to store the element as a variable for easy reference.

myFlipster.flipster('next'); // Next item
myFlipster.flipster('prev'); // Previous item
myFlipster.flipster('jump', 0); // Jump to a specific index
myFlipster.flipster('jump', $('.my-item')); // Jump to a specific item
myFlipster.flipster('play'); // Resume autoplay
myFlipster.flipster('play', 5000); // Set autoplay duration
myFlipster.flipster('pause'); // Pause the autoplay until next jump
myFlipster.flipster('stop'); // Stop the autoplay entirely
myFlipster.flipster('index'); // If items are added or removed, you can tell Flipster to reindex