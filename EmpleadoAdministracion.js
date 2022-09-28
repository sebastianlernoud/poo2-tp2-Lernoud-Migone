const Empleado = require('./Empleado');


function EmpleadoAdministracion(nombre,apellido,dni,salario){
    Empleado.call(this,nombre,apellido,dni);
    if(salario<= 0){
        throw new Error("El sueldo deber ser mayor a cero.");
    }else{
        this.salario = salario;
    }

    this.mostrarSalario = function(){
        return "El salario de "+this.nombre+" "+this.apellido+" es: " + this.salario;
    }
}

EmpleadoAdministracion.prototype = Object.create(Empleado.prototype);
EmpleadoAdministracion.prototype.constructor = EmpleadoAdministracion;


module.exports = EmpleadoAdministracion;
