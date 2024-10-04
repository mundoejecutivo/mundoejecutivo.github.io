document.addEventListener("DOMContentLoaded", function() {
    const nextButtons = document.querySelectorAll(".next");
    const fieldsets = document.querySelectorAll("#msform fieldset");
    const progressItems = document.querySelectorAll("#progressbar li");
    let currentFieldset = 0;

    // Función para actualizar la barra de progreso
    function updateProgress() {
        progressItems.forEach((item, index) => {
            item.classList.remove("active"); // Remueve la clase 'active' de todos
            if (index < currentFieldset) {
                item.classList.add("active"); // Marca como activo los anteriores
            }
        });
        progressItems[currentFieldset].classList.add("active"); // Marca el actual
    }

    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            const inputs = fieldsets[currentFieldset].querySelectorAll("input[required]");
            let allFilled = true;

            inputs.forEach(input => {
                if (!input.value) {
                    allFilled = false;
                    input.classList.add("error"); // Añade clase de error si no está lleno
                } else {
                    input.classList.remove("error"); // Elimina clase de error si está lleno
                }
            });

            if (allFilled) {
                fieldsets[currentFieldset].style.display = "none"; // Oculta el campo actual
                currentFieldset++; // Mueve al siguiente
                fieldsets[currentFieldset].style.display = "block"; // Muestra el siguiente
                updateProgress(); // Actualiza la barra de progreso
            }
        });
    });
});