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


// class EmpleadoAntiguo extends Empleado{
//     constructor(nombre,apellido,dni,pagoPorhora){
//         super(nombre,apellido,dni);
//         if (pagoPorhora<= 0){
//             throw new Error("El pago por hora debe ser mayor a cero.");
//         }
//         this.pagoPorhora = pagoPorhora;
//         this.facturas = [];
//     }

//     get salario(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + this.calcularSalario();
//     }

//     calcularSalario(){
//         let horasTotales = 8*5*4;
//         let porcentaje = 0.15;
//         let gananciaVentas = this.calcularVentas*porcentaje;
//         return this.pagoPorhora*horasTotales + gananciaVentas;
//     }

//     get calcularVentas(){
//         let total = 0;
//         this.facturas.forEach(element => {
//             total += element.calcularPrecio;
//         });
//         return total;
//     }

//     vender(factura){
//         this.facturas.push(factura);
//     }
// }

module.exports = EmpleadoAntiguo;