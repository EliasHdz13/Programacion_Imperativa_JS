let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}


function age(numero){
    if (numero < 0) {
        console.log('Error, edad invalida. Por favor ingrese un numero valido.');
    }
    else if (numero = 21) {
        console.log('Bienvenido, felicitaciones por haber llegado a la mayoria de edad');
    }

    else if (numero = (numero % 2 === 1)){
        console.log('¿Sabías que tu edad es impar?.');
    }
}


// total a pagar

const totalAPagar = (vehiculo, ltsConsumidos) => {
    let total = undefined;
    let precioLitro = undefined;
    if (vehiculo === 'coche'){
        precioLitro = 86
    } else if  (vehiculo = 'moto'){
        precioLitro = 70
    } else if (vehiculo = 'autobus') {
        precioLitro = 55
    } else {
        return 'No existe vehiculo en base de datos'
    }
     /* Impuesto por la cantidad de litros consumidos */
    if (ltsConsumidos > 0 && ltsConsumidos <= 25) {
        total = (ltsConsumidos * precioLitro) + 50;
    } else if (ltsConsumidos > 25) {
        total = (ltsConsumidos * precioLitro) + 25;
    } else {
        return "Los litros consumidos deben ser un numero positivo";
    }

    return total;
}

console.log(totalAPagar('coche', 25));

// Sandwiches

// Elegir Sandwich base
// Base + delta

const sandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let precio = undefined;
    if (base === 'pollo') {
        precio = 150
    }    else if (base === 'carne') {
        precio = 200
    } else if (base === 'veggie') {
        precio = 100
    } else {
        console.log('no tenemos esa base');
    }

    if (pan === 'blanco') {
        precio += 50
    } else if (pan === 'negro'){
        precio += 60
    } else if (pan === 's/gluente'){
        precio += 75
    } else {
        console.log('no tenemos ese pan');
    }

    if(queso == true) {precio += 20}
    if(tomate == true) {precio += 15}
    if(lechuga == true) {precio += 10}
    if(cebolla == true) {precio += 15}
    if(mayonesa == true) {precio += 5}
    if(mostaza == true) {precio += 5}

    return precio
}

console.log(sandwich('pollo', 'blanco', true, true, true, true, true, true));


