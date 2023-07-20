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
// - Se imprime la serie de fibonacci sin permitir que sobrepase 10.000
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Definición de la función 'fibonacci' que imprime la serie de Fibonacci hasta un número dado
const fibonacci = () => {
  let anterior = 0;
  let actual = 1;
  let temporal = 1;

  // Imprime el primer valor de la serie
  process.stdout.write("0 ");

  // Genera la serie de Fibonacci usando un ciclo for
  for (temporal = 1; temporal < 6765;) {
    // Imprime el valor actual de la serie
    process.stdout.write(`${temporal} `);

    // Calcula el siguiente valor de la serie
    temporal = anterior + actual;
    anterior = actual;
    actual = temporal;
  }

  // Imprime el último valor de la serie
  process.stdout.write(`${temporal}`);
}

// Llama a la función 'fibonacci' para generar la serie hasta llegar al número 10,000
fibonacci();


  

