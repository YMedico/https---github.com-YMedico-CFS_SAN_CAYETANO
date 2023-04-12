/*
​MAX-MIN estructuras de control 
• Diseñar un algoritmo que lea números enteros hasta teclear 0
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados
• Pensar cuidadosamente cómo debemos inicializar las variables
*/

import * as rls from "readline-sync"

let num:number = rls.questionInt("Ingrese numero:");
let i = 0;
while (num!=0){
    if(i<=num)i=num;
    num = rls.questionInt("Ingrese numero:");
} 
console.log("El numero Mayores:" + i);