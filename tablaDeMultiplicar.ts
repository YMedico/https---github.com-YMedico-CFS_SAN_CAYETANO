/* • Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor 
*/

import * as rls from 'readline-sync';
let n1: number = parseFloat(rls.question('Primer numero que va a multiplicar: '));
let n2: number = parseFloat(rls.question(`Segundo numero que va a multiplicar a ${n1}: `));
console.log(`Tabla de multiplicación de ${n1}:`);
for (let i = 1; i <= n2; i++) {
  console.log(`${n1} x ${i} = ${n1 * i}`);
}
