function Persona(){
  this.nombre = "Fernando";
  this.apellido = "Herrera";
  this.edad= "23 años";

  this.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido+ " ("+this.edad+ ")");
  }
}

Persona.prototype.pais= "México";

var fer = new Persona();

console.log(Persona);
