document.addEventListener("DOMContentLoaded", function() {
    const nextButtons = document.querySelectorAll(".next");
    const fieldsets = document.querySelectorAll("#msform fieldset");
    const progressItems = document.querySelectorAll("#progressbar li");
    let currentFieldset = 0;

    // Función para actualizar la barra de progreso
    function updateProgress() {
        progressItems.forEach((item, index) => {
            item.classList.remove("active");
            if (index < currentFieldset) {
                item.classList.add("active");
            }
        });
        progressItems[currentFieldset].classList.add("active");
    }

    nextButtons.forEach(button => {
        button.addEventListener("click", function() {
            const inputs = fieldsets[currentFieldset].querySelectorAll("input[required]");
            let allFilled = true;

            inputs.forEach(input => {
                if (!input.value) {
                    allFilled = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (allFilled) {
                fieldsets[currentFieldset].style.display = "none";
                currentFieldset++;
                fieldsets[currentFieldset].style.display = "block";
                updateProgress();
            } else {
                alert("Por favor, completa todos los campos obligatorios.");
            }
        });
    });

    // Evento para manejar el envío del formulario
    document.getElementById("msform").addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario por defecto

        const inputs = document.querySelectorAll("input[required]");
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!allFilled) {
            alert("Por favor, completa todos los campos obligatorios antes de enviar.");
        } else {
            // Aquí se realiza el envío del formulario con AJAX
            const formData = new FormData(this); // Obtiene los datos del formulario

            fetch(this.action, {
                method: this.method,
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert("¡Todos los datos se enviaron correctamente!");
                    // Opcional: Puedes redirigir al usuario o hacer algo más aquí
                } else {
                    alert("Hubo un problema al enviar los datos. Inténtalo de nuevo.");
                }
            })
            .catch(error => {
                alert("Hubo un error de red. Inténtalo de nuevo.");
            });
        }
    });
});
