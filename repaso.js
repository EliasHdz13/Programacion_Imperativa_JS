/*En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.
*/

let concurso = [
    {
        usuario: 'Glenda',
        like: 500
    },
    {
        usuario: 'Teresita',
        like: 50
    },
    {
        usuario: 'Adriana',
        like: 5555
    },
    {
        usuario: 'Yarely',
        like: 15
    },
    {
        usuario: 'Carolina',
        like: 1
    },
    {
        usuario: 'Enrique',
        like: 2
    },
    {
        usuario: 'Adrian',
        like: 5252525
    },
    {
        usuario: 'Mile',
        like: 566
    },
    {
        usuario: 'Lenis',
        like: 999
    },
    {
        usuario: 'Beatriz',
        like: 1
    },
    {
        usuario: 'Federico',
        like: 235
    },
    {
        usuario: 'Francisco',
        like: 25
    },
    {
        usuario: 'Andres',
        like: 35
    },
    {
        usuario: 'Luis',
        like: 45
    },
    {
        usuario: 'Elias',
        like: 55
    }
]

let ordenar = (array) => {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j].like < array[j + 1].like) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    } return array
}

ordenar(concurso)

console.log(concurso);

/*
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.
*/

let ctrlTemp = [
    {
        dia: 1,
        mes: 'enero',
        minima: 117,
        maxima: 323
    },
    {
        dia: 1,
        mes: 'febrero',
        minima: 127,
        maxima: 333
    },
    {
        dia: 1,
        mes: 'marzo',
        minima: 137,
        maxima: 343
    },
    {
        dia: 1,
        mes: 'abril',
        minima: 147,
        maxima: 353
    },
    {
        dia: 1,
        mes: 'mayo',
        minima: 157,
        maxima: 363
    },
]

let ordenarTempMin = (array) => {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j].minima > array[j + 1].minima) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    } return array
}

ordenarTempMin(ctrlTemp)

console.log(ctrlTemp);

let ordenarTempMax = (array) => {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j].minima < array[j + 1].minima) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    } return array
}

ordenarTempMax(ctrlTemp)

console.log(ctrlTemp);