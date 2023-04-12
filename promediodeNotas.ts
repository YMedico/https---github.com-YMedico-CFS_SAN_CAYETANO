import * as rls from "readline-sync";

let nota, suma, promedio, contador : number;
suma=0;
for (contador=1; contador<=10; contador++) {
nota = rls.questionInt("Ingresar la nota " + contador + ": ");
suma +=nota;
}
promedio = suma/10;
console.log("Promedio final de las notas: " + promedio);

