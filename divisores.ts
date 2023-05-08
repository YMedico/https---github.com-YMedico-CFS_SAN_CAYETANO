/*
Implemente un metodo llamoado cantidadDeDivisores que reciba
un numero entero y devuelva la cntidad de divisores 
Por ejmplo, para el numero 16, su divisores son 1,2,4,8,16,por
lo que la respuesta deberia ser 5
Re-utilice el metodo esMultiplo implemntando para el ejercicio anterior. 
*/

import * as rls from "readline-sync";
function cantidadDeDivisores(numero: number): number {
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }
  return contador;
}

console.log(cantidadDeDivisores(16));