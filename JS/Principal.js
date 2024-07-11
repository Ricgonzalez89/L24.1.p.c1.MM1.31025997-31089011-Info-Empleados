/*3. INFO EMPLEADOS
|* En una empresa se tiene personal obrero y personal administrativo. La empresa necesita determinar 
|* cuál es el monto promedio que paga por cada tipo de personal.
|* Al ser consultada por la forma como desean que se presente la salida, la empresa suministra el 
|* siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana $120, 
|* Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150:
|* Monto total pagado a obreros: $270
|* Promedio pagado a 3 obreros: $90
|* Monto total pagado a administrativos: $350
|* Promedio pagado a 2 administrativos: $175
*/
import Cl_personal from "./Cl_personal.js";
import Cl_empresa from "./Cl_empresa.js";

let personal1 = new Cl_personal("Juan", "OBRERO", 100);
let personal2 = new Cl_personal("Ana", "OBRERO", 120);
let personal3 = new Cl_personal("Lin", "ADMINISTRATIVO", 200);
let personal4 = new Cl_personal("Mary", "OBRERO", 50);
let personal5 = new Cl_personal("Carlos", "ADMINISTRATIVO", 150);
let empresa = new Cl_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Monto total pagado a obreros: $${empresa.mostrarMontoPagoObrero()}
<br>Promedio pagado a ${empresa.mostrarCantObrero()} obreros: $${empresa.calcPromedioPagoObrero()}
<br>
<br>Monto total pagado a administrativos: $${empresa.mostrarMontoPagoAdmin()}
<br>Promedio pagado a ${empresa.mostrarCantAdmin()} administrativos: $${empresa.calcPromedioPagoAdmin()}
`;
