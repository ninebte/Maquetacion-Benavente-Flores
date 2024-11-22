function cambiarColorYRedirigir(url, boton) {
    // Cambiar el color del botón al hacer clic
    boton.classList.add('clicked');

    // Redirigir a la página después de un pequeño retraso (para que se vea el cambio de color)
    setTimeout(function() {
        window.location.href = url; // Redirige a la página
    }, 200); // Espera 200ms antes de redirigir
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos con la clase "check"
    const checks = document.querySelectorAll('.check');

    // Añadimos un evento de clic a cada uno
    checks.forEach(check => {
        check.addEventListener('click', () => {
            // Comprobar el estado actual (data-checked)
            const isChecked = check.getAttribute('data-checked') === 'true';

            // Alternar el estado
            check.setAttribute('data-checked', !isChecked);

            // Alternar la clase CSS
            if (isChecked) {
                check.classList.add('unchecked');
            } else {
                check.classList.remove('unchecked');
            }
        });
    });
});

function cambiarColor(boton) {
    // Cambiar el color del botón al hacer clic
    boton.classList.add('clicked');
}

function navigateToCourse() {
    window.location.href = "cursos.html";
}

