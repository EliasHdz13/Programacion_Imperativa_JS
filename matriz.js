/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let mat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

function sumarMatriz(matriz) {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j];
        }
    }
    return acc;
}

console.log(sumarMatriz(mat));

console.log('----------------------------------------');
console.log('----------------------------------------');
console.log('----------------------------------------');
console.log('----------------------------------------');



function generarMatriz10por10() {
    let matriz = [];
    let acc = 1;
    for (let i = 0; i < 10; i++) {
        let fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push(acc++);
        }
        matriz.push(fila);
    }
    return matriz;
}

let matriz10por10 = generarMatriz10por10();
console.log(matriz10por10);
console.table(matriz10por10);


function diagIzq(matriz) {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc = acc + matriz[i][i]
    }
    return acc
}
console.log(diagIzq(matriz10por10));

function diagDer(matriz) {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc = acc + matriz[i][matriz.length - 1 - i]
    }
    return acc
}

console.log(diagDer(matriz10por10))


console.log('----------------------------------------');
console.log('----------------------------------------');
console.log('----------------------------------------');
console.log('----------------------------------------');


let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173,
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160,
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180,
    },
];

const ordenarObj = (arr) => {
    let temp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].estatura > arr[j + 1].estatura) {
                temp = arr[j]; // 2
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

ordenarObj(personas);

console.log(personas);