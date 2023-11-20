// 1 

function pgToCm(valor) {
    return valor * 2.54
}

console.log(pgToCm(5));

// 2 

function urlPepito(pagina) {
    return 'http://www.' + pagina + '.com';
}

console.log(urlPepito('pepito'));

// 3 

function admiracion(string) {
    return string + '!'
}

console.log(admiracion('palabra'));

//4 

function edadPerros(edad) {
    return edad * 7
}

console.log(edadPerros(4));

//5 

function valorHora(sueldo) {
    return (sueldo / 40) + 'USD/hr'
}

console.log(valorHora(2000));

// 6 

function calculadorIMC(altura, peso) {
    return (peso / (altura * altura))
}

console.log(calculadorIMC(1.83, 80));

// 7

let convertirMayus = (string) => string.toUpperCase()

console.log(convertirMayus('elias'));


//8

let tipo = (dato) => typeof dato

console.log(tipo('5'));

// 9 
let circulo = (radio) => 2 * Math.PI * radio

console.log(circulo(5));


console.log('------------------------------------');

let edad = 18

if (edad < 0) {

    console.log('Error, edad inválida. Por favor  Ingrese un número válido.');
} else if (edad < 18) {
    console.log("No puede pasar al bar.")
} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

console.log('------------------------------------');


// Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.


function repetirDiez(numero) {
    let diez = 10
    for (let i = ++numero; i < (numero + diez); i++) {
        console.log(i);
    }
    return ''
}

console.log(repetirDiez(1));

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function saltarTres() {
    for (let i = 5; i <= 20; i = i + 3) {
        console.log(i);
    }
}

console.log(saltarTres());

// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

function sumatoria() {
    let resultado = 0
    for (let i = 1; i <= 100; i++) {
        resultado += i
    }
    return resultado
}

console.log(sumatoria());

//Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(numero) {
    let multiplicador = 1
    for (let i = 1; i <= numero; i++) {
        multiplicador = multiplicador * i
    }
    return multiplicador
}

console.log(factorial(10));

console.log('------------------------------------');

let numbers = [22, 33, 54, 66, 72]

console.log(numbers.length)


let str = 'un string cualquiera'
let arrayAleatorio = ["Digital", "House", 'true', "string", "123", "false", '54', str]
console.log(arrayAleatorio[arrayAleatorio.length - 1])


console.log('------------------1------------------');

// 1 

let peliculas1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log(peliculas1);

let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const elimPel2 = peliculas2.pop();

console.log(elimPel2);



console.log('-----------------2-------------------');
// 2 
console.log('-----------------3-------------------');
// 3

console.log('-----------------4-------------------');
// 4
let convertirArrayMayus = (array1, array2) => {
    const arrayUpper = []
    for (i = 0; i < array1.length; i++) {
        arrayUpper.push(array1[i].toUpperCase())
    }
    for (i = 0; i < array2.length; i++) {
        arrayUpper.push(array2[i].toUpperCase())
    }
    return arrayUpper
}
console.log(peliculas2);

console.log(convertirArrayMayus(peliculas1, peliculas2));

console.log('-----------------5-------------------');
//5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let compararScore = (score1, score2) => {
    const scoresTotal = []
    for (let i = 0; i < score1.length; i++) {
        if (score1[i] == score2[i]) {
            console.log(score1[i] + '=' + score2[i]);
        } else {
            console.log(score1[i] + '!=' + score2[i]);
        }
    }
}

console.log(compararScore(asiaScores, euroScores));

console.log('-----------------Nuevo-------------------');

let cadena = [1, 2, 3, 4, 5, 6]

let imprimirInverso = (inverso) => {
    const arrayInverso = []
    for (i = (inverso.length - 1); i != -1; i--){
        arrayInverso.push(inverso[i])
    }
    return arrayInverso
}

console.log(imprimirInverso(cadena));


let imprimir = (inverso) => {
    for (i = (inverso.length - 1); i != -1; i--){
        return inverso[i];
    }
}

console.log(imprimir(cadena));




const verificar = (numero, booleano) => {

    if( numero % 2 === 0 && booleano ){
        return 'Ha pasado la condicion'
    } else if (numero % 2 !== 0  && !booleano) {
        return 'No ha pasado la condicion'
    } else {
        return -1
    }
}


console.log(verificar(8, true));


const agregarId = (array) => {

    for (let i = 0; i < array.length; i++){
        array[i].id =  i + 1
    }

}



