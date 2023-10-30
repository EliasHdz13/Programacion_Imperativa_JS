const prompt = require("prompt-sync")({ sigint: true });

console.log('!probando NodeJS!')

console.log(("Gato" || "Perro"));

function puedePasar(nombre) {
    if (nombre !== "Cosme Fulanito"){
        return true
    } else {
        return false
    }

}


console.log('-------------');
// console.log(puedePasar("Natalia Natalia"));

function tablaDeMultiplicar(numero) {
  let i = 1;
  while (i <= 10) {
    let resultado = numero * i;
    console.log(numero + " * " + i + " = " + resultado);
    i++;
  }
}

let multiplicar = tablaDeMultiplicar(5);

console.log(multiplicar);

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

console.log(estudiantes);

estudiantes.push(
  {
    nombre: "Juan",
    promedio: 5,
    curso: "iOS",
  },
  {
    nombre: "Miguel",
    promedio: 2,
    curso: "Android",
  }
);

console.log(estudiantes);

console.log('-------------');
// Ejercicio 3: JS_funciones_reemplazo_fast_fast

function reemplazoFastFast(string, sustituir, reemplazo){
  let frase = string.replace(sustituir, reemplazo)
  return frase
}

let reemplazar = reemplazoFastFast('Hola, como estas', 'como', '?')

console.log(reemplazar);


console.log('-------------');
//Ejercicio 4: JS_funciones_estan_hablando_de_mi
function menciona(texto, palabra){
  let buscar = texto.includes(palabra)
  return buscar
}


console.log('-------------');
// Ejercicio 5: JS Funciones solo el nombre

let frase = 'Hola!, soy Carli';
let indiceCarli = frase.indexOf('Carli')
let licenciada = frase.slice(indiceCarli);

console.log(licenciada)

console.log('-------------');
// 1 Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
function diezSiguientes (valor) {
  let tope = 10
  for (let i = valor; i<10; i++) {
    console.log(i);
  }
};


diezSiguientes(50)

console.log('-------------');

// 2- Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function deATres () {
  for (let y = 5; y <= 20; y = y + 3 ){
    console.log(y);
  }
}

deATres()

console.log('-------------');
// 3- Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

const calcularSumatoria = () => {
  let acumulador = 0

  for (let i = 1; i < 101; i++){
    acumulador += i

  }
  return acumulador
}

let res = calcularSumatoria()

console.log(res);

console.log('-------------');
//

const calcularSumatoria2 = (numInicial, numFinal) => {
  let acumulador2 = 0

  for (let i = numInicial; i <= numFinal; i++){
    acumulador2 += i

  }
  return acumulador2
}

let res2 = calcularSumatoria2(1, 100)

console.log(res2);


console.log('-----Ej4-----');
// Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

const factorial = (numero) => {
  let variable = 1;
  for (let i = 1; i <= numero; i++){
    console.log(numero*i);
  }
}

console.log(factorial(5));
