// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar EmailJS con tu publicKey
    emailjs.init("RIfFi8AE00_KTHVT8");

    // Obtener el formulario y el botón de enviar
    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submit");

    // Función para enviar el correo
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevenir el envío estándar del formulario

        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const body = document.getElementById("body").value;

        // Crear un objeto con los datos del formulario
        const formData = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: body,
        };

        // Enviar el correo usando EmailJS
        emailjs.send('service_ew9ghnp', 'template_vx5mwfi', formData)
            .then(function(response) {
                alert("Correo enviado con éxito.");
            }, function(error) {
                alert("Error al enviar el correo: " + error.text);
            });
    });
});
