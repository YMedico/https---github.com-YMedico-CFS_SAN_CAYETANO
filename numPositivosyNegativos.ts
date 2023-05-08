/*
Tipos de Números en Arreglo 

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/
import * as rls from 'readline-sync';

const cantidad = rls.questionInt('Ingrese la cantidad de números: ');

const numeros: number[] = [];
let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < cantidad; i++) {
  const numero = rls.questionInt(`Ingrese el número ${i + 1}: `);
  numeros.push(numero);

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);
console.log(`Cantidad de ceros: ${ceros}`);