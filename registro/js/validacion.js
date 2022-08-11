function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function controlError() {
    // preparar mensaje y control de error
    var mensaje = "ATENCION!!!..Ingrese:";
    var error   = false;
    // capturar datos del formulario
    var nombre   = document.getElementById("nombre").value;
    var apellido  = document.getElementById("apellido").value;
    var email    = document.getElementById("email").value;
    var pass1    = document.getElementById("password1").value;
    var pass2    = document.getElementById("password2").value;    
    var terminos = document.getElementById("terminos").checked;   
    // validar datos
    if (nombre=="") {
        mensaje = mensaje + "debe ingresar nombre:\n";
        error   = true;
    } // endif
    if (apellido=="") {
        mensaje = mensaje + "debe ingresar Apellido:\n";
        error   = true;
    } // endif
    if (email=="") {
        mensaje = mensaje + "debe ingresar email:\n";
        error   = true;
    } // endif
    if (pass1=="") {
        mensaje = mensaje + "debe ingresar contraseña:\n";
        error   = true;
    } // endif
    if (pass2=="") {
        mensaje = mensaje + "debe repetir contraseña:\n";
        error   = true;
    } // endif
    if (pass1!=pass2) {
        mensaje = mensaje + "no coinciden las contraseñas\n";
        error   = true;        
    } // endif

    if (!terminos) {
        error = true;
    }
        
    
    // controlar error
    if (error) {
        // enviar mensaje de error
        showAlertError(mensaje);
    } else {
        // enviar el formulario
        showAlertSuccess();
    } // endif  
}

