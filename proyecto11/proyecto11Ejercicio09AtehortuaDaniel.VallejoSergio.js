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
// - El programa muestra ternas determinadas de numeros enteros
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const numeros = () => {
  for (let col1 = 1, col2 = 1, col3 = 1, j = 2; col1 <= 9; col1++, j++) {
    if (col3 === 4) {
      col3 = 1; // Reiniciar el valor de la tercera columna a 1 cuando llega a 4
    }
    col2 = Math.floor((j + 1) / 3); // Calcular el segundo número de la terna
    console.log(`${col1} ${col2} ${col3}`); // Mostrar la terna de números
    col3++; // Incrementar el tercer número de la terna
  }
};

console.log("Este programa entrega las siguientes ternas de números:");

numeros();
  



