function imprimir(nombre, apellido){

  // apellido = apellido || "xxx";
  //
  // se mete un ciclo o comparacòn (arriba) para ver que conteindo tiene el argumento
  // // apellido. Se puede hacer de las dos maneras

  if (apellido=== undefined) {
  apellido="xxx";

}


  console.log(nombre+""+apellido);
}

imprimir("Juan",);
