/*
Diseñar un algoritmo que recorra las butacas de una sala de cine
 y determine cuántas butacas desocupadas hay
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero(true) en el 
arreglo indica que la butaca está ocupada
• La presencia de un valor falso(false) en el
arreglo indica que la butaca está desocupada
*/
import * as rls from "readline-sync";
const butacas: boolean[] = [true,false,false,true,true,false,true,false,false]; // ejemplo de arreglo de butacas
let desocupadas: number = 0;

for (let i = 0; i < butacas.length; i++) {
  if (!butacas[i]) { // si el valor es falso, se considera butaca desocupada
    desocupadas++;
  }
}

console.log(`Hay ${desocupadas} butacas desocupadas.`);