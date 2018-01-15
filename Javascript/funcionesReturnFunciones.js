function creaFuncion(){

  return function(){
    // se le pueden agregar parametros diferentes 
    console.log("me crearon!");
  }
}

var nuevaFuncion = creaFuncion();
nuevaFuncion();
