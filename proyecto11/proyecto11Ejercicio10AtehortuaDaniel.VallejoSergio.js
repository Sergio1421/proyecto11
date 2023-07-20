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
// - Se simula una computadora que muestre el movimiento de dos A a los extremos, acercandose al centro con cada entrada por teclado del usuario    
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

const generarAnimacion = (contador) => {
    // Función para generar la animación con dos "A" utilizando un bucle for.
  
    for (let i = 0; i < 9; i++) {
      // Imprimir espacios en blanco antes del primer "A"
      imprimirEspacios(1, contador);
      process.stdout.write("A");
  
      // Imprimir espacios en blanco entre las dos "A"
      imprimirEspacios(1, 8 - contador);
      process.stdout.write("A");
  
      // Cambiar de línea
      process.stdout.write("\n");
  
      // Actualizar el contador para la siguiente iteración
      contador = (contador + 1) % 9;
  
      // Demora de 1 segundo antes de la siguiente iteración
      if (i < 8) {
        // Si no es la última iteración, limpiar la pantalla y esperar 1 segundo
        setTimeout(() => {
          process.stdout.write("\x1Bc"); // Limpiar la pantalla
        }, 1000);
      }
    }
  };
  
  // Función para imprimir espacios en blanco
  const imprimirEspacios = (contador, final) => {
    for (let i = contador; i <= final; i++) {
      process.stdout.write(" ");
    }
  };
  
  // Llamada inicial a la función para generar la animación
  generarAnimacion(0);
  

  

