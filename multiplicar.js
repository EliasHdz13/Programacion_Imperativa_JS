function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
      let resultado = numero * i;
        console.log(numero + " * " + i + " = " + resultado);
        i++;
    }
}

let multiplicar = tablaDeMultiplicar(5);

console.log(multiplicar);