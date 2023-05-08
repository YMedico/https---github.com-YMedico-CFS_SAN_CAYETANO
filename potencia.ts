/* 
Realice un programa que devuelva la potencia de un numero 
La base y el exponete deben ser ingresados por teclado 
Solo deben admitirse exponentes mayores o iguales a cero 
Recuerde que el resultado de un numero elvado a 0 es 1
Separe la logica de calcular la potencia utilizadndo metodos 

*/
import * as rls from "readline-sync";
function calcularPotencia(base: number, exponente: number) {
  if (exponente === 0) {
    return 1;
  }
   else {
    let resultado = 1;
    for (let i = 1; i <= exponente; i++) {
      resultado *= base;
    }
    return resultado;
  }
}
function pedirDatos() {
  const base = parseInt(rls.question("Ingresa la base: "));
  const exponente = parseInt(rls.question("Ingresa el exponente debe ser mayor o igual a 0: "));

  if (exponente >= 0) {
    const resultado = calcularPotencia(base, exponente);
    console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);
  } else {
    console.log(" El exponente debe ser mayor o igual a 0");
  }
}

pedirDatos();