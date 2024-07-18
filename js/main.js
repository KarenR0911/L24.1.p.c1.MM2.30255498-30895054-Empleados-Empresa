/*Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino 
(F)emenino), edad. Se desea que determine e imprima: promedio de edad de los hombres y la 
mayor edad entre las mujeres procesadas y quien la tiene. 
Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad) (Mary, ‘F’, 43), 
(José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)  */

import Empleado from "./Empleado.js";
import Empresa from "./Empresa.js";

let emp1 = new Empleado("Mary", "F", 43);
let emp2 = new Empleado("José", "M", 40);
let emp3 = new Empleado("Carlos", "M", 30);
let emp4 = new Empleado("Pedro", "M", 50);
let emp5 = new Empleado("Mery", "F", 45);
let emp6 = new Empleado("Liz", "F", 50);

let empresa = new Empresa();

empresa.procesarEmpleado(emp1);
empresa.procesarEmpleado(emp2);
empresa.procesarEmpleado(emp3);
empresa.procesarEmpleado(emp4);
empresa.procesarEmpleado(emp5);
empresa.procesarEmpleado(emp6);

let salida = document.getElementById("Salida");
salida.innerHTML = `A continuación se mostrarán los resultados:<br><br>`;
salida.innerHTML += `Promedio de edad de los hombres: ${empresa.calcPromMasc()}`;
salida.innerHTML += `<br>La mayor edad entre las mujeres es: ${empresa.devolverEdadFem()} y la tiene ${empresa.devolverNomFem()}`;
