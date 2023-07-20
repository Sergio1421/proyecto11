// Proyecto 11

// - Fecha: Junio 26 2023
// - Hora: 8am
// - Version: 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - ECMAscript 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Ejecuta programas propuestos para el proyecto 11
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Herramientas para recibir entrada por teclado del usuario

var prompt = require('prompt-sync')(); // Importamos el prompt en forma de variable (var)
const readline = require('readline');
//----------------------------------------------------------
const rl = readline.createInterface({ // importamos el readline para crear una interfaz
    input: process.stdin,  // Simula el input del usuario
    output: process.stdout // Simula el output del usuario
});

// - Fecha: Junio 26 2023
// - Hora: 8am
// - Version: 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - ECMAscript 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Se imprime la serie de fibonacci del 0 al 100
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const fibonacci = () => {
  let anterior = 0;
  let actual = 1;
  let temporal = 1;
  let suma = 0;

  // Imprime el primer valor de la serie
  process.stdout.write("0 ");

  // Calcula la serie de Fibonacci y suma los elementos
  for (temporal = 1; temporal < 100;) {
      // Imprime el valor actual de la serie
      process.stdout.write(`${temporal} `);

      // Suma el valor actual a la variable 'suma'
      suma += temporal;

      // Calcula el siguiente valor de la serie
      temporal = anterior + actual;
      anterior = actual;
      actual = temporal;
  }

  // Imprime la suma de los elementos de la serie
  console.log(`y su suma es: ${suma}`);
}

// Llama a la función 'fibonacci' para calcular la suma de los elementos hasta llegar al número 100
fibonacci();

  

