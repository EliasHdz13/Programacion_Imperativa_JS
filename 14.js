const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
/*

*/


// a. Obtener en un nuevo array las edades menores a 18.
const mayorEdad = (array) => {
    let mayorDieciocho = []
    for (i = 0; i < array.length; i++) {
        if (array[i] < 18) {
            mayorDieciocho.push(array[i])
        }
    } return mayorDieciocho
}

console.log(mayorEdad(edades));

// b. Obtener en un nuevo array las edades mayor o igual a 18.
const mayorIgualDieciocho = (array) => {
    let mayorIgDieciocho = []
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 18) {
            mayorIgDieciocho.push(array[i])
        }
    } return mayorIgDieciocho
}

console.log(mayorIgualDieciocho(edades));

// c. Obtener en un nuevo array las edades igual a 18.

const igualDieciocho = (array) => {
    let igualDieciocho = []
    for (i = 0; i < array.length; i++) {
        if (array[i] == 18) {
            igualDieciocho.push(array[i])
        }
    } return igualDieciocho
}

console.log(igualDieciocho(edades));

// d. Obtener el menor.

const menor = (array) => {

    let menor = array[0] //2

    for (let i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i]
        }
    }

    return menor

}

console.log(menor(edades));

// e. Obtener el mayor.

const mayor = (array) => {

    let mayor = array[0] // 15

    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i]
        }
    }

    return mayor

}

console.log(mayor(edades));

//f. Obtener el promedio de edades.

const promedio = (arreglo) => {
    let acc = 0
    for (let i = 0; i < arreglo.length; i++) {
        acc += arreglo[i]
    }
    return acc / arreglo.length
}

console.log(promedio(edades));

//g. Incrementar en 1 todas las edades.

const sumarUno = (array) => {

    for (let i = 0; i < array.length; i++) {
        array[i]++
    }
    return array
}

console.log(sumarUno(edades));


console.log('-------   2   -------');

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
        },
        {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
        }     
    ]




//a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

const menorTrein = ( array ) => {
    let menoresATreinta = []
    for(i = 0; i < array.length; i++ ){
        if (array[i].edadTitular < 30){
            menoresATreinta.push(array[i].edadTitular)
        }
    } return menoresATreinta
}

console.log(menorTrein(arrayCuentas));

// b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

const mayorIgTrein = ( array ) => {
    let mayoresIgTreinta = []
    for(i = 0; i < array.length; i++ ){
        if (array[i].edadTitular >= 30){
            mayoresIgTreinta.push(array[i].edadTitular)
        }
    } return mayoresIgTreinta
}

console.log(mayorIgTrein(arrayCuentas));

// c. Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
const menorIgTrein = ( array ) => {
    let menoresIgTreinta = []
    for(i = 0; i < array.length; i++ ){
        if (array[i].edadTitular <= 30){
            menoresIgTreinta.push(array[i].edadTitular)
        }
    } return menoresIgTreinta
}

console.log(menorIgTrein(arrayCuentas));

//d. Obtener la cuenta con el titular de la misma más joven.

const titularJoven = ( array ) => {
    let arrayMenor = array[0].edadTitular //33
    let titularMasJoven
    for(i = 1; i < array.length; i++ ){

        if (array[i].edadTitular < arrayMenor ){
            arrayMenor = array[i].edadTitular
            titularMasJoven = array[i]
        } 
    } 
    return titularMasJoven;
}

console.log(titularJoven(arrayCuentas));

// e. Obtener un array con las cuentas habilitadas.

const ctaHabilitada = (array) => {
    let arrayHabilitado = []
    for(i = 0; i < array.length; i++){
        if (array[i].estaHabilitada == true){
            arrayHabilitado.push(array[i])
        }
    } return arrayHabilitado
}

console.log(ctaHabilitada(arrayCuentas));


// f. Obtener un array con las cuentas deshabilitadas.
const ctaDeshabilitada = (array) => {
    let arrayDeshabilitado = []
    for(i = 0; i < array.length; i++){
        if (array[i].estaHabilitada == false){
            arrayDeshabilitado.push(array[i])
        }
    } return arrayDeshabilitado
}

console.log(ctaDeshabilitada(arrayCuentas));

/*
*/

//g. Obtener la cuenta con el menor saldo.

const menorSaldo = ( array ) => {
    let menorSaldo = array[0].saldo //33
    let ctaMenorSaldo
    for(i = 1; i < array.length; i++ ){
        if (array[i].saldo < menorSaldo ){
            menorSaldo = array[i].saldo
            ctaMenorSaldo = array[i]
        } 
    } 
    return ctaMenorSaldo;
}

console.log(menorSaldo(arrayCuentas));

//h. Obtener la cuenta con el mayor saldo.
const mayorSaldo = ( array ) => {
    let mayorSaldo = array[0].saldo 
    let ctaMayorSaldo
    for(i = 1; i < array.length; i++ ){
        if (array[i].saldo > mayorSaldo ){
            mayorSaldo = array[i].saldo
            ctaMayorSaldo = array[i]
        } 
    } 
    return ctaMayorSaldo;
}

console.log(mayorSaldo(arrayCuentas));