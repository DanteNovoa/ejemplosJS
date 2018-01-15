var formulario = document.getElementById("miFormulario");
window.onload= iniciar;

function iniciar(){
  document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value=="") {
      alert("el campo no puede ser vacío");
      error(elemento);
      return false;
    }
    return true;
}

function validaTelefono(){
  var elemento = document.getElementById('telefono');
  limpiarError(elemento);
  if (isNaN(elemento.value)) {
    alert("inserte un numero valido");
    error(elemento);
    return false;
  }
  return true;
}

function validaFecha(){
  var dia = document.getElementById('dia').value;
  var mes = document.getElementById('mes').value;
  var ano = document.getElementById('ano').value;

  var fecha = new Date(ano, mes, dia);
  if (isNaN(fecha)) {
    alert ("no es una fecha valida");
    return false;
  }
  return true;
}

function validarCheck(){
  var campoCheck = document.getElementById('mayor');
  if (!campoCheck.checked) {
    alert("Debe de ser mayor de edad");
    return false;
  }
  return true;
}

function validar(e){
  if (validaNombre() && validaTelefono() && validaFecha() && validarCheck() && confirm("Deseas enviar el formulario")) {
    return true;
  }else{
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  elemento.className="error";
  elemento.focus();
}

function limpiarError(elemento){
  elemento.className="";

}
