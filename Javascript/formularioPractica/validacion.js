window.onload= iniciar;

function iniciar(){
  document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
  var elemento=document.getElementById("nombre");

  if (!elemento.checkValidity()) {
    if (elemento.validity.valueMissing) {
      error2(elemento,"Debe Introducir un Nombre")
    }
    if(elemento.validity.patternMismatch){
      error2(elemento, "No puede contener numeros");
    }
    // error(elemento);
    return false;
  }
  return true;
}

function validaEdad(){
  var elemento=document.getElementById("edad");

  if (!elemento.checkValidity()) {
     if(elemento.validity.valueMissing){
      error2(elemento, "debe introducir un nombre")
     }
    if(elemento.validity.rangeOverflow){
      error2(elemento, "el valor no puede ser mayor a 100")
     }
    if(elemento.validity.rangeUnderflow){
      error2(elemento, "el valor debe de ser mayor o igual que 18");
     }
    // error(elemento);
    return false;
 }
  return true;

}

function validaTelefono(){
  var elemento=document.getElementById("tel");
  if (!elemento.checkValidity()) {
    if(elemento.validity.valueMissing){
      error2(elemento, "debe de introducir un telèfono")
    }
    if(elemento.validity.patternMismatch){
      error2(elemento, "el teléfono debe de tener 9 números");
    }
    // error(elemento);
    return false;
  }
  return true;
}

function validar(e){
  borrarError();
  if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulse aceptar para enviar") ) {
    return true;
  }else{
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
  elemento.className="error";
  elemento.focus();
}
function error2(elemento, mensaje){
  document.getElementById("mensajeError").innerHTML= mensaje;
  elemento.className="error";
  elemento.focus();
}
function borrarError(){
  var formulario = document.forms[0];
  for (var i = 0; i <formulario.elements.length; i++) {
    formulario.elements[i].className="";
  }
}
