
//Funcion sensilla
function print(texto) {
  console.log(texto);
}

print("Hola mundo");

//Funcion que puede interactuar con variables del global
var pi = 3.1416;

function areaCirculo(r) {
  return pi*r*r;
}

print(areaCirculo(10));


//Tambien las funciones anonimas, que esta toman el una variable como.
//Puede ser util si pasa este funcion como constante a otra funcion.
const saludo = function (nombre) {
  print(`Hola, ${nombre}`);
}

saludo("Hector");

//Tambien se pueden escribir como:
//------------------------------------------//
const saludo1 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludo2 = nombre => `Hola, ${nombre}`;

//------------------------------------------//
