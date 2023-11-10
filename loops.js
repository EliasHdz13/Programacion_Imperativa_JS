// loop pares

let loopDePares = function (numero) {

    for (let i = 0; i <= 100; i++) {
        const suma = i + numero
        if (suma % 2 === 0) {
            console.log('El numero ' + suma + ' es par');
        }

    }
}



// loop impares
let loopDeImpares = function (numero, palabra) {

    for (let i = 0; i <= 100; i++) {
        const suma = i + numero
        if (suma % 2 === 1) {
            console.log(palabra);
        }
        console.log(i);
    }
}

// loopDeImpares(1, 'palabra')

// Sumatoria


function sumatoria(numero) {
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
        resultado += i;
    }
    console.log(resultado);
}

// Nuevo arreglo

let array = []

function nuevoArreglo(numero) {
    for (i = 1; i <= numero; i++) {
        array.push(i)
    }
    console.log(array);;
}


// String.split()


function separar(texto) {
    let arreglo = []
    for (i = 0; i < texto.length; i++) {
        arreglo.push(texto[i])
    }
    console.log(arreglo);
}


separar('lol')

// Manejando dos arreglos
