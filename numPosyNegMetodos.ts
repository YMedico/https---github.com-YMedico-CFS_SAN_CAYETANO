/*
Tipos de Números en Arreglo (con Métodos)

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
*/



import * as rls from 'readline-sync';

function contarNumeros(arr: number[]): [number, number, number] {
  let ceros = arr.filter(numero => numero === 0).length;
  let positivos = arr.filter(numero => numero > 0).length;
  let negativos = arr.filter(numero => numero < 0).length;
  return [ceros, positivos, negativos];
}

const cantidad = rls.questionInt('Ingrese la cantidad de números: ');

const numeros: number[] = [];
for (let i = 0; i < cantidad; i++) {
  const numero = rls.questionInt(`Ingrese el número ${i + 1}: `);
  numeros.push(numero);
}

const [ceros, positivos, negativos] = contarNumeros(numeros);

console.log(`Cantidad de ceros: ${ceros}`);
console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);