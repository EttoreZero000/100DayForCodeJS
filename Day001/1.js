
// Se imprime en la consola del navegador, o terminal con nodeJS
console.log("Hola desde Node.js");

// Variables: var,let y const

var a=1;
let b=2;
const c=3;
const array="Hola, mundo"

console.log(a,b,c, array);

// var y let se puede reasginar otro valor
a=4;
b=4;
// const no se puede
// c=3
console.log(a,b,c);

// Solo el var se puede llamar fuera de un bloque, digamos que es global
{
  var d=10;
  let e=11;
  const f=12;
}
// Hay errores al llamar el let y const con diferentes bloques
console.log(d);

// Suma, multiplicacion, divicio, resta, modulo y potencia
console.log(a+a, a*2, a/a, a-a, a%a, Math.pow(a,2));

// JS ya tiene su biblioteca estandar ya incluida se debara de aprender o tener un listado de sus funciones ya que se pueden utilizar ya que son matematicas basicas decir de algun modo se deben de utilizar, se puede encontra en la documentacion de la libreria Math

//Ahora tenemos las estructuras basicas de if/else, for y while

if (0==c%2) {
  console.log("El numero:", c, " es par")
} else {
  console.log("El numero:", c," es impar")
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

while (a<10) {
  a+=1
  console.log(a)
}
