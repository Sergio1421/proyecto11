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
// - Calcula series de taylor con logaritmo natural de x
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const main = () => {
    let t, x, s = 0;
    console.log("Este programa imprime un resultado para ln(x) utilizando una serie de Taylor");
    x = parseFloat(prompt("Ingrese un valor para x: "));
    t = parseInt(prompt("Ingrese el número de términos de la serie: "));
    for (let i = 1; i <= t; i++) {
      s = s + ((Math.pow(-1, i-1) * Math.pow(x-1, i)) / i);
    }
    console.log("El resultado es: " + s.toFixed(8));
  };
  
  main();
  

