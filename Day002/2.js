

//Funcion principal donde se ingresa una funcion segundaria con sus datos a modificar
function mapPotenciado(f, map) {
  let resultado = [];
  let i;
  for (let i = 0; i < map.length; i++) {
    resultado[i] = f(map[i]);
  }
  return resultado;
}


//Funcion segundaria para procesar los datos
const f = function cuadrado(a) {
  return a*a;
}

//Datos a modificar
var map = [1,2,3,4,5];

//Donde va a llegar los datos para que el cliente lo resiva.
let cube = mapPotenciado(f, map);
console.log(cube);
