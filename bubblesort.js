const edades = [33, 27, 34, 30, 34, 25];


//ASC 
for (let i = 0; i < edades.length; i++) {
    for (let j = 0; j < edades.length - 1; j++) {
        if (edades[j] > edades[j + 1]) {
            let aux = edades[j]
            edades[j] = edades[j + 1]
            edades[j + 1] = aux
        }
    }
}


console.log(edades);

//DESC

for (let i = 0; i < edades.length; i++) {
    for (let j = 0; j < edades.length - 1; j++) {
        if (edades[j] < edades[j + 1]) {
            let aux = edades[j]
            edades[j] = edades[j + 1]
            edades[j + 1] = aux
        }
    }
}


console.log(edades);

// LETRAS 
const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']


for (let i = 0; i < letras.length; i++) {
    for (let j = 0; j < letras.length - 1; j++) {
        if (letras[j] > letras[j + 1]) {
            let aux = letras[j]
            letras[j] = letras[j + 1]
            letras[j + 1] = aux
        }
    }
}


console.log(letras);

// objetos

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
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
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


for (let i = 0; i < arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) {
            if (arrayCuentas[j].edadTitular > arrayCuentas[j + 1].edadTitular) {
                let aux = arrayCuentas[j].edadTitular
                arrayCuentas[j].edadTitular = arrayCuentas[j + 1].edadTitular
                arrayCuentas[j + 1].edadTitular = aux
            }
        }
    }

console.log(arrayCuentas);

for (let i = 0; i < arrayCuentas.length; i++) {
    for (let j = 0; j < arrayCuentas.length - 1; j++) {
        if (arrayCuentas[j].saldo > arrayCuentas[j + 1].saldo) {
            let aux = arrayCuentas[j].saldo
            arrayCuentas[j].saldo = arrayCuentas[j + 1].saldo
            arrayCuentas[j + 1].saldo = aux
        }
    }
}

console.log(arrayCuentas);
