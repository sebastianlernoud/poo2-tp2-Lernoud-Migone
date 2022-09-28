const EmpleadoVentas = require('./EmpleadoVentas');

function EmpleadoAntiguo(nombre,apellido,dni,salario){
    EmpleadoVentas.call(this,nombre,apellido,dni);
    if(salario<=0){
        throw new Error("El salario debe ser mayor a cero");
    }
    this.salario = salario

    this.mostrarSalario = function(){
        return "El salario de "+this.nombre+" "+this.apellido+" es: " + this.calcularSueldo();
    };

    this.calcularSueldo = function(){
        return salario + this.calculoFacturas();
    };

    this.calculoFacturas = function(){
        total =0;
        
        this.facturas.forEach(element => {
            total+=element.importe;
        });
        return total;
    };
}

EmpleadoAntiguo.prototype = Object.create(EmpleadoVentas.prototype);
EmpleadoAntiguo.prototype.constructor = EmpleadoAntiguo;


module.exports = EmpleadoAntiguo;
