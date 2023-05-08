/*
Cree un metodo esMultiplo con 2 parametros que devuelva el valor logico, 
verdadero o falso, segun si el primer numero que se indeque 
como parametro es multiplo del segundo.
Recuerde  que la operaacion mod permite saber si el resto de una division es cero.
*/
import * as rls from "readline-sync";
function esMultiplo(num: number, divisor: number): boolean {
  return num % divisor === 0;
}

for (let i = 1; i <= 20; i++) {
  if (esMultiplo(i,3)) {
    console.log(`${i} es múltiplo de 3`);
  } else {
    console.log(`${i} no es múltiplo de 3`);
  }
}