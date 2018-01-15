alert(">kfdkf");

var persona = {

  nombre:"Dante",
  apellido: "Novoa",
  imprimirNombre: function(){
    console.log("Nombre completo");
  },
  saludar : function(saludo){
    console.log(saludo + " " + persona.apellido)
  }
}
persona.imprimirNombre();
persona.saludar("Hola Lic");
