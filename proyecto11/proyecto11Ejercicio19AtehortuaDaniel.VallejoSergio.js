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
// - Piramide con centro hacia la izquierda hacia la columna 35 fila 6. Desde la columna 40
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const space = (n) => {
    for (; n > 0; n--) {
      process.stdout.write(" ");
    }
  };
  
  const main = () => {
    let s = 39;
    for (let a = 1; a <= 6; a++) {
      space(s);
      for (let b = 0; b < a; b++) {
        process.stdout.write("A");
      }
      process.stdout.write("\n");
      s = s - 1;
    }
  
    s = s + 2;
  
    for (let c = 5; c >= 1; c--) {
      space(s);
      for (let b = 0; b < c; b++) {
        process.stdout.write("A");
      }
      process.stdout.write("\n");
      s = s + 1;
    }
  };
  
  main();
  

