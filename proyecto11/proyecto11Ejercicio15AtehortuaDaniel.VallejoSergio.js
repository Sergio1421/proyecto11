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
// - Moño de A iniciando desde la columna 34
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const space = (n) => {
    for (; n > 0; n--) {
      process.stdout.write(" ");
    }
  };
  
  const letter = (n) => {
    for (; n > 0; n--) {
      process.stdout.write("A");
    }
  };
  
  const main = () => {
    let sb = 27;
    let si = 5;
  
    for (let i = 1; i <= 4; i++) {
      if (i === 4) {
        space(sb);
        letter(7);
      } else {
        space(sb);
        letter(i);
        space(si);
        letter(i);
      }
      process.stdout.write("\n");
      si = si - 2;
    }
  
    si = si + 4;
    for (let j = 1; j < 4; j++) {
      space(sb);
      letter(4 - j);
      space(si);
      letter(4 - j);
      process.stdout.write("\n");
      si = si + 2;
    }
  };
  

