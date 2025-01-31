
//Defini una lista de numeros
const numeros = [1,2,3,4,5]

//Lamar el primer elemento
console.log(numeros[0])

//Largo de la lista
console.log(numeros.length)

numeros.push(10);
//numeros.pop();
numeros.unshift(10);
//numeros.shift();


console.log("Numeros en columna:")
for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  console.log(element)
}


numeros.pop()
numeros.shift()

const buscarNumero = numeros.find(numero => numero > 4);
console.log(buscarNumero)

const filtrarNumero = numeros.filter(numero => numero > 3);
console.log(filtrarNumero)
