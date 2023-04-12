import * as rls from "readline-sync"
let nota1= rls.questionInt ("ingrese nota 1: ");
let nota2= rls.questionInt ("ingrese nota 2: ");
let nota3= rls.questionInt ("ingrese nota 3: ");
let nombreAlumno= rls.question ("ingrese nombre alumno: ");
let result=0;

while (nombreAlumno!=""){
    result= nota1*0.1 + nota2*0.5 + nota3*0.40
    console.log (result)
    nombreAlumno=rls.question ("ingrese nombre alumno: ");
    if(nombreAlumno!=""){
    nota1= rls.questionInt ("ingrese nota 1: ");
    nota2= rls.questionInt ("ingrese nota 2: ");
    nota3= rls.questionInt ("ingrese nota 3: ");}
}