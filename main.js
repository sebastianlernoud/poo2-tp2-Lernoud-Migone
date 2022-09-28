const Empleado = require("./Empleado");
const EmpleadoAdministracion = require("./EmpleadoAdministracion");
const EmpleadoAntiguo = require("./EmpleadoAntiguo");
const EmpleadoSuplente = require("./EmpleadoSuplente");
const EmpleadoVentas = require("./EmpleadoVentas");
const Factura = require("./Factura");
const FacturaProducto = require("./FacturaProducto");
const InfoProducto = require("./InfoProducto");
const Pieza = require("./Pieza");
const Stock = require("./Stock");
const StockProducto = require("./StockProducto");

pieza = new Pieza("martillo",500)
empleado1 = new EmpleadoAdministracion("Martin","Lasarte", 40404040,70000)
empleado2 = new EmpleadoAntiguo("Jose","Caminata",3030303,60000); 
empleado3 = new EmpleadoSuplente("Jorge","Escaloneta",3030303,200,500); 
empleado4 = new EmpleadoVentas("Juan","Rodri",3030303);
// empleado4
// empleado5
console.log(empleado1.mostrarSalario())
//console.log(empleado2.mostrarSalario())
console.log(empleado3.mostrarSalario())

pieza1 = new Pieza("Clavo",300);
facturaP = new FacturaProducto(pieza1,10);
factura = new Factura(1,empleado2);
factura.sumarRenglones(facturaP);
factura.calcularImporte();
empleado2.vender(factura);
console.log(empleado2.mostrarSalario());


factura1 = new Factura(2,empleado4);
factura1.sumarRenglones(facturaP);
factura1.sumarRenglones(facturaP);
factura1.calcularImporte();
empleado4.vender(factura1);
console.log(empleado4.mostrarSalario());