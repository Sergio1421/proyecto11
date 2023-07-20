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
// - Imprime el factorial de un numero ingresado por el usuario
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función para calcular el factorial de un número utilizando ciclos for
const factorial = (num) => {
  if (num < 0) {
    console.log("Error"); // Si el número es negativo, se muestra un mensaje de error
  } else if (num === 0) {
    return 1; // Si el número es 0, el factorial es 1
  } else {
    let result = 1; // Se inicializa el resultado en 1
    for (let i = num; i >= 1; i--) {
      result *= i; // Se multiplica el resultado por cada número del ciclo
    }
    return result; // Se devuelve el resultado del factorial
  }
};

console.log("Este programa lee un número e imprime su factorial.");

rl.question("Ingrese un número: ", (input) => {
  const num = parseInt(input); // Se convierte la entrada a un número entero
  console.log(factorial(num)); // Se calcula y muestra el factorial del número ingresado
  rl.close(); // Se cierra la interfaz de lectura
});
  

