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
// El siguiente programa lee desde el teclado un grupo de 75 números, diferentes a cero e imprime:
// * Cantidad de números Mayores a 150
// * Número mayor y número menor encontrado en el grupo
// * Cantidad de Números negativos encontrados
// * Promedio de los Positivos Encontrados.
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


const numeros = []; // Arreglo para almacenar los números ingresados

// Función para leer los números
const leerNumeros = () => {
  for (let indice = 0; indice < 75; indice++) {
    let numero = 0;
    let valido = false;

    for (; !valido; ) { // El ; es para que se repita el bucle hasta que se cumpla la condicion de que sea valido   
      numero = parseFloat(prompt(`Ingrese el número ${indice + 1}:`));
      if (numero !== 0) {
        valido = true;
      } else {
        console.log('El número debe ser diferente de cero. Inténtelo nuevamente.');
      }
    }

    numeros.push(numero); // Agregar el número al arreglo
  }

  // Realizar los cálculos y mostrar los resultados
  calcularResultados();
};

// Resto del código igual...


  

