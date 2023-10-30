// 2
function converterPgCm(x){
    let inch = 2.54
    return x * inch
}

let resCm = converterPgCm(4)

console.log(resCm);

// 2

function url(dominio){
    return `www.${dominio}.com`
}

let resultado2 = url('digital')

console.log(resultado2);

// 3

function string (frase) {
    return `¡${frase}!`
}

let resultado3 = string('digital')

console.log(resultado3);

// 4

function anioPerros(edad){
    return edad*7
}

let edadPerros = anioPerros(7)

console.log(edadPerros);

// 5

function hhUSD(sueldo){
    let hhTotales = 40;
    return (sueldo/hhTotales)
}

let valorHora = hhUSD(8000)

console.log(valorHora);

// 6

function calculadorIMC(altura, peso) {
    let imc = peso/(altura * altura)
    return imc
}


let resultado6 = calculadorIMC(183, 80)

console.log(resultado6);



// 7 

function convertirMayus(frase){
    return frase.toUpperCase();
}

let resultado7 = convertirMayus('loco')

console.log(resultado7);

// 8

function tipoDato(dato) {
    let tipo = typeof dato
    return tipo
}

let resultado8 = tipoDato(5)

console.log(resultado8);

// 9 

function radioCirculo(radio){
    let circulo = radio * Math.PI * 2
    return circulo
}

let resultado9 = radioCirculo(10)

console.log(resultado9);