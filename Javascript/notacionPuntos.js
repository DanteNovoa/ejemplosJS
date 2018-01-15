
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad : 25,
    direccion: {
       pais: "México",
       ciudad: "Guadalajara",
       edificio:{
          nombre: "El Sauz",
          telefono: "01992839"
       }
    }
};
var edificio = persona.direccion.edificio;
var campo = "";
edificio.nopiso = "8vo";



persona.direccion.zipcode = 1191;
console.log(persona ["apellido"]);


// en esta practica se muestra como acceder a los atributos de un objeto y un objeto objetohijo mediante la notacion de punto
