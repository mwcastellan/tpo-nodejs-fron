/* Función para validar datos turnos*/
function validarturnos() {
    let validaNombrePersona = document.getElementById("nombreDueño").value;
    let validaNombreMascota = document.getElementById("nombreMascota").value;
    let validaDia = document.getElementById("dia").value;
    let validaHorario = document.getElementById("horario").value;
    
    if (validaNombrePersona == "" || validaNombreMascota == "" || validaDia == "" || validaHorario == "" ) {
        alert("Un campo esta vacio, favor de completar");
    } else {
        alert("Turno solicitado");
    }
}

/* Función para validar datos consulta */
function validarconsulta() {
    let validaNombre = document.getElementById("nombreCompleto").value;
    let validaEmail = document.getElementById("email").value;
    let validaAsunto = document.getElementById("motivo").value;
    let validaConsulta = document.getElementById("comentario").value;
        
    if (validaNombre == "" || validaEmail == "" || validaAsunto == "" || validaConsulta == "" ) {
        alert("Un campo esta vacio, favor de completar");
    } else if ( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(validaEmail)) ) {
        alert("Escriba un mail válido");
        } else {
            alert("Consulta enviada");
}
}
