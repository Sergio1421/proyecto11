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
// - Se imprime filas en forma de piramide invertida, desde la P hasta la D
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const space = (n) => {
    for (; n > 0; n--) {
      process.stdout.write(" ");
    }
  };
  
  const letter = (n, c) => {
    for (; n > 0; n--) {
      process.stdout.write(c);
    }
    process.stdout.write("\n");
  };
  
  const main = () => {
    let s = 0;
    for (let i = 13; i > 0;) {
      switch (i) {
        case 13:
          space(s);
          letter(13, 'P');
          break;
        case 11:
          space(s);
          letter(11, 'N');
          break;
        case 9:
          space(s);
          letter(9, 'L');
          break;
        case 7:
          space(s);
          letter(7, 'J');
          break;
        case 5:
          space(s);
          letter(5, 'H');
          break;
        case 3:
          space(s);
          letter(3, 'F');
          break;
        case 1:
          space(s);
          letter(1, 'D');
          break;
      }
      i = i - 2;
      s = s + 1;
    }
  };
  
  main();
  
  

