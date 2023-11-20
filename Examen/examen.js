// Ejercicio 1

const restarPares = (x, y) => {
    if (x % 2 == 0 && y % 2 == 0){
        return x - y
    } else {
        return 'Lo siento, uno o mas parámetros no son pares'
    }
}

console.log(restarPares(4, 2));

// Ejercicio 2

const controlRecital = (edad, booleano) => {
    if (edad >= 18 && booleano){
        return true
    } else if (edad < 18 && booleano){
        return 'Sólo puedes acceder con un adulto acompañante'
    } else {
        return false
    }
}

console.log(controlRecital(21, false));

// Ejercicio 3

let productos = [
    {
    producto : "remera",
    tipo: "indumentaria",
    precio: 2100
    },
    {
    producto : "notebook",
    tipo: "tecnologia",
    precio: 200000
    },
    {
    producto : "celular",
    tipo: "tecnologia",
    precio: 27000
    },
    {
    producto : "protector solar",
    tipo: "cosmetica",
    precio: 2500
    },
    {
    producto : "pantalon",
    tipo: "indumentaria",
    precio: 7500
    },
    {
    producto : "tablet",
    tipo: "tecnologia",
    precio: 60000
    },
    ]
    
const tecnologia = (array) => {
    const nuevoArr = []
    for (let i = 0; i < array.length; i++){
        if (array[i].tipo === 'tecnologia' && array[i].precio >= 50000){
            nuevoArr.push( array[i] )
        }
    } return nuevoArr

}

console.log(tecnologia(productos));