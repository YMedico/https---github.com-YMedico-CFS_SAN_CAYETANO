/*
Desarrolle un algoritmo que
 permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el 
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, 
pensar en aprovechar métodos y discutir
cómo representar la información
*/
import * as rls from 'readline-sync';

const alumnos: { nombre: string; notas: number[] }[] = [];

while (true) {
  const nombre = rls.question('Ingrese el nombre del alumno (o "fin" para terminar): ');
  if (nombre.toLowerCase() === 'fin') break;

  const notas: number[] = [];
  for (let trimestre = 1; trimestre <= 3; trimestre++) {
    const nota = rls.questionInt(`Ingrese la nota del trimestre ${trimestre}: `);
    notas.push(nota);
  }

  alumnos.push({ nombre, notas });
}

const nombreAlumno = rls.question('Ingrese el nombre del alumno para obtener su promedio anual: ');

const alumnoEncontrado = alumnos.find(alumno => alumno.nombre === nombreAlumno);
if (alumnoEncontrado) {
  const promedio = alumnoEncontrado.notas.reduce((total, nota) => total + nota, 0) / 3;
  console.log(`El promedio anual de ${nombreAlumno} es: ${promedio}`);
} else {
  console.log(`No se encontró al alumno ${nombreAlumno}`);
}