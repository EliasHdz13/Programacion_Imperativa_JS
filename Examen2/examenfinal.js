// Ejercicio 1

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]
/*
Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020.
*/

let filtrado = (array) => {
    let nuevo = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].modelo >= 2020) {
            nuevo.push(array[i])
        }
    }
    return nuevo
}

console.log(filtrado(autos));


// Ejercicio 2

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]
/* Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio*/


let ordenar = arr => {
    let temp
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
                temp = arr[j] .notaPromedio// 2
                arr[j].notaPromedio = arr[j + 1].notaPromedio
                arr[j + 1].notaPromedio = temp
            }
        }
    }
    return arr
};

console.log(ordenar(estudiantes));

// Ejercicio 3
let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

/*
1. Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
La función debe retornar un arreglo con todos los elementos  de esa columna.
*/

let arrCol = (arr, columna) => {
    let nuevo = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i][columna] !== undefined){
            nuevo.push(arr[i][columna])
        }
    }
    return nuevo
};

console.log(arrCol(matrix, 2));

/* 2. Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares de la matriz por un número 0 (cero) */

let matrizImp = mat => {
    for(let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat.length; j++){
            if(mat[i][j] % 2 !== 0){
                mat[i][j] = 0
            }
        }
    } return mat
}

console.log(matrizImp(matrix));