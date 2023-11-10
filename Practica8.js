let familiaUy = ['lenis', 'fede', 'glnda', 'mile', 'adrian'];
console.log(familiaUy);

//Acceder
console.log(familiaUy[2]);


//Longitud
console.log(familiaUy.length);

//Modificar
familiaUy[2] = 'glenda';
console.log(familiaUy);


//Agregar
familiaUy.push('terra');
console.log(familiaUy);
familiaUy.push('adrian')

//Extraer


//Comparar


// ¿Qué devuelven estos códigos?

// 1- Devuelve la longitud de 5 - undefined

// 2- Ironman

// 3



// function convertirAMayusculas(array) {
//     const peliculasMayusculas = [];
//     for (let i = 0; i < array.length; i++)
// }

const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
function convertirAMayusculas(array) {
  const peliculasMayusculas = [];
  for (let i = 0; i < array.length; i++) {
    peliculasMayusculas.push(array[i].toUpperCase());
  }
  return peliculasMayusculas;
}


const peliculasEnMayusculas = convertirAMayusculas(peliculas);


console.log(peliculasEnMayusculas);




let deportista = {
  energia: 100,
  experiencia: 10,
  nombre: "Aimar",
  entrenarHoras: function (horas) {
    return (this.energia = this.energia - (horas * 5)) && (this.experiencia = this.experiencia + (horas * 2))
  }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
