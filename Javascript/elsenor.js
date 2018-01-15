function Jugador(nombre){
  this.nombre= nombre;
  this.pv = 100;
  this.sp = 100;

// se declara una variable local que se llama curar , cada que sea requerida, entra a la function que tiene un parametro que llama a la variabale .pv y le dice que sume o iguale a 20
  this.curar= function( jugadorObjetivo ){

    if (this.sp>=40) {
      this.sp-=20;
      jugadorObjetivo +=20;
    }else {
      console.info(this.nombre + "no tengo suficiente sp")
    }
    this.estado(jugadorObjetivo)
  }

  this.tirarFlecha= function(jugadorObjetivo){
    if (jugadorObjetivo.pv >40) {
          jugadorObjetivo -= 40;
    }else {
      jugadorObjetivo.pv=0;
      console.error(jugadorObjetivo.nombre+" murio");
    }
    this.estado(jugadorObjetivo);
  }

  this.estado=function(jugadorObjetivo){
    console.log(this);
    console.log(jugadorObjetivo);

  }

}

var gandalf = new Jugador()
var legolas = new Jugador()

gandalf.curar(legolas);

console.log(gandalf);
console.log(legolas);
