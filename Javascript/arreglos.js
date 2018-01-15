var arr =[ 5,4,3,2,1];

console.log(arr);
console.log(arr[0], arr[23]);
arr.reverse();
console.log(arr +" "+"este es el arreglo volteao");

arr = arr.map(function(elem){
  elem*= elem;
  return elem;
});
console.log(arr);

arr=arr.map(Math.sqrt);
console.log(arr);
