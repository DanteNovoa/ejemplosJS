
var nombre="Juan Carlos";


var persona = {
  nombre: "dante",
  apellido: "novoa",
  imprimirNombre: function(){
    console.log(this.nombre+ " "+this.apellido);
  }
};

persona.imprimirNombre();
