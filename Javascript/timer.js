var tiempo = document.querySelector("#tiempo");
var segundos = 0;



var intervalo= setInterval(function(){
  segundos++;

  tiempo.innerHtml= segundos;
}, 1000)

setTimeout(function(){

  clearInterval(intervalo);
}, 5000)
