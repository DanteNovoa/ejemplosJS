function obtenerAleatorio(){
  return Math.random();
}

console.log(obtenerAleatorio()+10);

// aqui estamos definiendo funciones y haciendo que me regrese (almacenen un valor)

function obtenerNombre(){
  return "Dante";
}


// se pueden nombrar funciones para convertirse a booleanos
function esMayor05(){
  if (obtenerAleatorio()> 0.5) {
    return true;
  }else {
    return false;
  }
}

if (esMayor05() ) {
  console.log("Es mayor a 0.5");
}else {
  console.log("Es menor a 0.5");
}

function crearPersona(nombre, apellido){
  return{
    nombre: nombre,
    apellido: apellido
    // aqui estamos retornando un objeto
  }
}

// aqui estamos atrapando el retorno de la funcion crearPErsona en una var person
var persona = crearPersona("María", "ladelbarrio");
console.log(persona.nombre);
