function validacion (){

  
    var elements = document.querySelectorAll("input");
    
    
    var valid_elements = [];

  
    elements.forEach(element => {
        
      
        var required_text = document.createElement("p");
        required_text.appendChild(document.createTextNode("Rellene este campo"));
        required_text.style.color = "red";

        // create validation error message in red
        var error_text = document.createElement('p');
        if (element.type === "text") {
            var validation_msg = "Debe tener entre 2 y 30 letras"
        }
        else if ( element.type === "email" ) {
            var validation_msg = "Email inválido"
        }
        else if (element.type === "password") {
            if (element.name === "C" ) {
                var validation_msg = " Solo puede tener 8 caracteres"
            }
            else if (element.name === "RC") {
                var validation_msg = "Las contraseñas no coinciden"
            }
        }
        error_text.appendChild(document.createTextNode(validation_msg));
        error_text.style.color = "red";

        // guarda los iconos
        var success_icon = document.createElement("img");
        success_icon.setAttribute("src", "images/success-icon.svg");
        success_icon.className = "success";
        var error_icon = document.createElement("img");
        error_icon.setAttribute("src", "images/error-icon.svg");   
        error_icon.className = "error";

        // verifica si esta vacio
        const isEmpty = str => !str.trim().length;
        element.addEventListener("input", function() {
            // si lo esta
            if ( isEmpty(this.value) ) {
                // quitaria el textro error
                if (document.body.contains(error_text)){
                    element.parentNode.removeChild(error_text);
                }

                // quitaria el icono 
                if (document.body.contains(error_icon)){
                    element.parentNode.removeChild(error_icon);
                }

                
                element.parentNode.appendChild(required_text, element);

                // cambia el borde a rojo 
                element.style.border = "3px solid red";  
                element.parentNode.appendChild(error_icon, element); 
            }
            // si no esta vacio
            else {
                
                 // quitaria el mensaje de error
                if (document.body.contains(required_text)){
                    element.parentNode.removeChild(required_text);
                }

                 // quitaria el icono 
                if (document.body.contains(error_icon)){
                    element.parentNode.removeChild(error_icon);
                }

                // rquitaria el icono de error
                if (document.body.contains(success_icon)){
                    element.parentNode.removeChild(success_icon);
                }
          
                // contidion para cambiar el mensaje de validar
                if ( element.name === "RC" ) {
                    condition = (document.getElementById('contraseña').value !== element.value);
                }
                else {
                    condition = (element.checkValidity() === false);
                }

                // si no es valido
                if ( condition ) {
                    // muestra el error de validaciohn
                    element.parentNode.appendChild(error_text, element);

                    // cambia el color del borde
                    element.style.border = "3px solid red";
                    element.parentNode.appendChild(error_icon, element);
                    
                
                    const index = valid_elements.indexOf(element.name);
                    if (index > -1) { 
                        valid_elements.splice(index, 1); 
                    }
                }
                // si es valido
                else {
                    // quita los errores 
                    if (document.body.contains(error_text)){
                        element.parentNode.removeChild(error_text);
                    }

                    // quita el icono
                    if (document.body.contains(error_icon)){
                        element.parentNode.removeChild(error_icon);
                    }
                    
                    // ccambio de color del borde
                    element.style.border = "3px solid green";
                    element.parentNode.appendChild(success_icon, element);
                    
                    
                    if ( !valid_elements.includes(element.name) ){
                        valid_elements.push(element.name)
                    }
                }
            }
        });

    });

    document.getElementById('button').addEventListener("click", function(){

        const all_elements = ["N", "G", "contraseña", "RC"]
        if ( all_elements.every(field => valid_elements.includes(field)) ) {
            alert("La inscripción se ha realizado con éxito.");
        }
        else {
           alert("La inscripción no es posible, por favor revisa los campos.");
        }
    });

    return valid_elements
}

window.onload = validation;