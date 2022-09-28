const Empleado = require('./Empleado');


function EmpleadoVentas(nombre,apellido,dni){
    Empleado.call(this,nombre,apellido,dni);
    this.facturas = [];


    this.mostrarSalario = function(){
        return "El salario de "+this.nombre+" "+this.apellido+" es: " + this.calcularSalario();
    }

    this.vender = function(factura){
        if (Object.getPrototypeOf(factura).constructor.name != "Factura"){
            throw new Error("Debe ser una Factura");
        }
        this.facturas.push(factura);
    }

    this.calcularSalario = function(){ 
        total =0;
        this.facturas.forEach(element => {
            total+=element.importe;
        });
        return total;
    }
}
EmpleadoVentas.prototype = Object.create(Empleado.prototype);
EmpleadoVentas.prototype.constructor = EmpleadoVentas;
module.exports = EmpleadoVentas;

