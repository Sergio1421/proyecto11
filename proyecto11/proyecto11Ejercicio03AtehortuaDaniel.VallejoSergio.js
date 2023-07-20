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
// - El siguiente programa imprime un numero entero alreves
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función para contar la cantidad de dígitos en un número
const contarDigitos = (numero) => {
  let contador = 0;
  for (let i = numero; i >= 1; i = Math.floor(i / 10)) {
    contador++;
  }
  return contador;
};

// Función para intercambiar los dígitos del número y mostrarlo al revés
const intercambiarDigitos = (numero, cantidadDigitos) => {
  let numeroAlReves = 0;
  for (; cantidadDigitos > 0; cantidadDigitos--) {
    let auxiliar = numero;
    let digito = parseFloat(numero / 10);
    numero = Math.floor(digito);
    digito = auxiliar - (numero * 10);
    numeroAlReves = numeroAlReves + (digito * (Math.pow(10, cantidadDigitos - 1)));
  }
  console.log(numeroAlReves);
};

rl.question('Este programa lee desde el teclado un número entero y lo imprime al revés.\nIngrese el número: ', (numeroIngresado) => {
  const numero = parseInt(numeroIngresado);
  const cantidadDigitos = contarDigitos(numero);
  intercambiarDigitos(numero, cantidadDigitos);
  rl.close();
});
  

