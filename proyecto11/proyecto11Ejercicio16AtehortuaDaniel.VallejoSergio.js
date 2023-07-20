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
// - Rombo desde la columna  7 hasta la fila 7
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const space = (n) => {
    for (; n > 0; n--) {
      process.stdout.write(" ");
    }
  };
  
  const main = () => {
    let s = 9;
    for (let m = 1; m <= 7;) {
      space(s);
      for (let o = 0; o < m; o++) {
        process.stdout.write("Z");
      }
      process.stdout.write("\n");
      s = s - 1;
      m = m + 2;
    }
  
    s = s + 2;
  
    for (let n = 5; n >= 1;) {
      space(s);
      for (let o = 0; o < n; o++) {
        process.stdout.write("Z");
      }
      process.stdout.write("\n");
      s = s + 1;
      n = n - 2;
    }
  };
  
  main();

  

