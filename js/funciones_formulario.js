
/* Función para validar datos turnos */
function validarturnos() {
    let validaNombrePersona = document.getElementById("nombreDueño").value;
    let validaNombreMascota = document.getElementById("nombreMascota").value;
    let validaDia = document.getElementById("dia").value;
    let validaHorario = document.getElementById("horario").value;

    if (validaNombrePersona == "" || validaNombreMascota == "" || validaDia == "" || validaHorario == "") {
        alert("Un campo está vacío, favor de completar");
        return false; // Evita que se envíe el formulario
    } else {
        alert("Turno solicitado");
        document.getElementById("nombreDueño").value = ""; // Limpia los campos del formulario
        document.getElementById("nombreMascota").value = "";
        document.getElementById("dia").value = "";
        document.getElementById("horario").value = "";
        return false; // Evita que se envíe el formulario
    }
}

/* Función para validar datos consulta */
function validarconsulta() {
    let validaEmail = document.getElementById("email").value;

    // Expresión regular para validar el correo electrónico
    let emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

    if (validaEmail !== "" && !emailRegex.test(validaEmail)) {
        alert("Escriba un mail válido");
        return false; // Evita que se envíe el formulario
    }

    let validaNombre = document.getElementById("nombreCompleto").value;
    let validaAsunto = document.getElementById("motivo").value;
    let validaConsulta = document.getElementById("comentario").value;

    if (validaNombre == "" || validaAsunto == "" || validaConsulta == "") {
        alert("Un campo está vacío, favor de completar");
        return false; // Evita que se envíe el formulario
    } else {
        alert("Consulta enviada");
        
        // Limpiar campos del formulario
        document.getElementById("nombreCompleto").value = "";
        document.getElementById("email").value = "";
        document.getElementById("motivo").value = "";
        document.getElementById("comentario").value = "";

        return false; // Evita que se envíe el formulario
    }
}