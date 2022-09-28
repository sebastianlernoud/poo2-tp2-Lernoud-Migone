const Empleado = require('./Empleado');

function EmpleadoSuplente(nombre,apellido,dni,horasTrabajadas,pagoPorhora){
    Empleado.call(this,nombre,apellido,dni);
    if (pagoPorhora<= 0 || horasTrabajadas<= 0 ){
        throw new Error("El pago por hora y las horas deben ser mayor a cero.");
    }
    this.pagoPorhora = pagoPorhora;
    this.horasTrabajadas = horasTrabajadas;
    
    this.mostrarSalario = function(){
        return "El salario de "+this.nombre+" "+this.apellido+" es: " + calcularSalario();
    }

    var calcularSalario = function(){
        return pagoPorhora*horasTrabajadas;
    }

}


EmpleadoSuplente.prototype = Object.create(Empleado.prototype);
EmpleadoSuplente.prototype.constructor = EmpleadoSuplente;

module.exports = EmpleadoSuplente;



