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
// - Imprime los factoriales de un numero no negativo desde 0 hasta N
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const factorial = (n) => {
    // La función factorial calcula el factorial de un número dado de forma iterativa utilizando un bucle for.
  
    if (n === 0) {
      // El factorial de 0 es 1.
      return 1;
    }
  
    let result = 1;
    for (let i = 1; i <= n; i++) {
      // Calcula el factorial de n multiplicando n por el factorial de n-1.
      result *= i;
    }
  
    return result;
  };
  
  const sumFactorials = (n) => {
    // La función sumFactorials calcula la suma de los factoriales de todos los números desde 0 hasta n utilizando un bucle for.
  
    if (n === 0) {
      // Si n es 0, el resultado es el factorial de 0 (que es 1).
      return 1;
    }
  
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      // Calcula el factorial del número actual (i) y suma el resultado con la iteración anterior.
      sum += factorial(i);
    }
  
    return sum;
  };
  
  rl.question('Ingrese un número entero no negativo: ', (answer) => {
    // Lee la respuesta del usuario y la almacena en la variable answer.
  
    const n = parseInt(answer);
  
    if (Number.isNaN(n) || n < 0) {
      // Verifica si el número ingresado no es un valor numérico válido o es negativo.
      console.log('El número ingresado no es válido.');
    } else {
      // Calcula la suma de los factoriales y la muestra en la consola.
      const result = sumFactorials(n);
      console.log('La suma de los factoriales desde 0 hasta', n, 'es:', result);
    }
  
    rl.close();
  
    // Cierra la interfaz de lectura de la línea para finalizar el programa.
  });
  

