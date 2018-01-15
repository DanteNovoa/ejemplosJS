var Persona = function(){
  this.nombre="juan";
  this.apellido="Pineda";
  this.edad=18;

};

var juan = new Persona();

for(prop in juan){
  console.log( prop);
}
