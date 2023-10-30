console.log('-------Ej1------');
// 1 Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function diezSiguientes (valor) {
    for (let i = (valor+1); i<=(valor+10); i++) {
        console.log(i);
    }
};  

diezSiguientes(10)


console.log('-------Ej2------');
// 2- Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function deATres () {
    for (let y = 5; y <= 20; y = y + 3 ){
        console.log(y);
    }
}

deATres()


console.log('-------Ej3------');
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

console.log('------Ej4-------');
// Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

// const factorial = (numero) => {
//   let variable = 1;
//   for (let i = 1; i <= numero; i++){
//     variable *= i;
//   }
//   return variable;
// };

// console.log(factorial(5));

const factorial = (numero) => {
    let variable = 1;
    for (let i = 1; i <= numero; i++){
      variable = variable * i;
    }
    return variable;
}

console.log(factorial(5));

