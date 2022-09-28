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




// class EmpleadoAdministracion extends Empleado{
//     constructor(nombre,apellido,dni,pagoPorhora){
//         super(nombre,apellido,dni);
//         if (pagoPorhora<= 0){
//             throw new Error("El pago por hora debe ser mayor a cero.");
//         }
//         this.pagoPorhora = pagoPorhora;
//     }

//     get salario(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + this.calcularSalario();
//     }

//     calcularSalario(){
//         let horasTotales = 8*5*4;
//         return horasTotales*this.pagoPorhora;
//     }
// }

module.exports = EmpleadoAdministracion;