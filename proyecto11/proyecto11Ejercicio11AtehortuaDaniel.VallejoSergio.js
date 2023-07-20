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
// - Se imprime piramide de letras A hacia la izquierda
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const imprimir = (k, j, i) => {
  for (let x = i; x <= 25; x++) {
    for (let y = j; y >= 1; y--) {
      process.stdout.write(" "); // Imprime espacios en blanco
    }
    for (let z = k; z >= 1; z--) {
      process.stdout.write("A"); // Imprime el carácter "A"
    }
    process.stdout.write("\n"); // Imprime un salto de línea para iniciar una nueva fila de la pirámide
    k = k + 1; // Actualiza la cantidad de caracteres "A" por fila
    j = 80 - i; // Actualiza la cantidad de espacios en blanco por fila
    i = i + 1; // Actualiza el número de fila actual
  }
};

const main = () => {
  console.log("Este programa imprime lo siguiente:");
  let k = 0; // Cantidad inicial de caracteres "A" por fila
  let j = 80; // Cantidad inicial de espacios en blanco por fila
  let i = 0; // Número de fila actual

  imprimir(k, j, i); // Llama a la función para imprimir la pirámide
};

main();

  

  

