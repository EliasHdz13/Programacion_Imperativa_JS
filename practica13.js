console.log();
console.log();
console.log('------------------1--------------------------');/*
1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox
https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
utilicen la función console.log para mostrar datos en la misma.
*/

/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log();
console.log();
console.log('------------------2------------------------------');
//2 
/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [
    3,
    6,
    67,
    6,
    23,
    11,
    100,
    8,
    93,
    0,
    17,
    24,
    7,
    1,
    33,
    45,
    28,
    33,
    23,
    12,
    99,
    100
];

/**
 * Y el siguiente indice:
 */

let indice = 10;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.

let arrInd = (arr, i) => {
    console.log(arr[i]);
};

// Invoca tu función debajo de esta linea.

console.log(arrInd(array, indice));


console.log();
console.log();
console.log('------------------3-------------------------');

/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
    if (numeroMes < 8 && numeroMes % 2 !== 0 && numeroMes < 13) {
        return 31 // meses menores 8 e impares, 31 dias
    } else if (numeroMes === 2 && numeroMes < 13) {
        return 28 // febrero
    } else if (numeroMes === 8 && numeroMes < 13) {
        return 31 // agosto
    } else if (numeroMes > 8 && numeroMes % 2 === 0 && numeroMes < 13) {
        return 31 // meses mayores a 8 y pares, 31 dias
    } else if (numeroMes < 8 && numeroMes % 2 === 0 && numeroMes < 13) {
        return 30 // meses menores a 8 y pares, 30 dias
    } else if (numeroMes > 8 && numeroMes % 2 !== 0 && numeroMes < 13) {
        return 30
    } else {
        return 'no corresponde'
    };
}

// E invocala:
console.log(diasDelMes(88));
// Por ahora, la función retorna 0.
// Modifica el codigo para que retorne
// los datos correctos.


console.log();
console.log();
console.log('------------------4-----------------------');

/*
let invertir = (numero) => {
    let inv = [numero]
    for (i = 1; i < x; i++){
      return acc.push(numero[x])
    }
  }
  
  console.log(invertir(54321))

  */

let numero = 54543
let inv = [numero]

console.log(inv);
console.log(inv[0].length);

function invertir (num){
    let inv = [num]

}