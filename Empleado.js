
function Empleado(nombre,apellido,dni){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.calcularSalario = function(){}
}

module.exports = Empleado;
// function EmpleadoAdministracion(nombre,apellido,dni,salario){
//     Empleado.call(this,nombre,apellido,dni);
//     if(salario<= 0){
//         throw new Error("El sueldo deber ser mayor a cero.");
//     }else{
//         this.salario = salario;
//     }

//     this.mostrarSalario = function(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + calcularSalario();
//     }

//     var calcularSalario = function(){
//         let horasTotales = 8*5*4;
//         return horasTotales*this.pagoPorhora;
//     }
// }

// EmpleadoAdministracion.prototype = Object.create(Empleado.prototype);
// EmpleadoAdministracion.prototype.constructor = EmpleadoAdministracion;


// function EmpleadoSuplente(nombre,apellido,dni,horasTrabajadas,pagoPorhora){
//     Empleado.call(this,nombre,apellido,dni);
//     if (pagoPorhora<= 0 || horasTrabajadas<= 0 ){
//         throw new Error("El pago por hora y las horas deben ser mayor a cero.");
//     }
//     this.pagoPorhora = pagoPorhora;
//     this.horasTrabajadas = horasTrabajadas;
    
//     this.mostrarSalario = function(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + calcularSalario();
//     }

//     var calcularSalario = function(){
//         return pagoPorhora*horasTrabajadas;
//     }

// }


// EmpleadoSuplente.prototype = Object.create(Empleado.prototype);
// EmpleadoSuplente.prototype.constructor = EmpleadoSuplente;


// function EmpleadoVentas(nombre,apellido,dni){
//     Empleado.call(this,nombre,apellido,dni);
//     this.facturas = [];


//     this.mostrarSalario = function(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + calcularSalario();
//     }

//     this.vender = function(factura){
//         if (Object.getPrototypeOf(factura).constructor.name == "Factura"){
//             throw new Error("Debe ser una Factura");
//         }
//         this.facturas.push(factura);
//     }

//     var calcularSalario = function(){ //Terminar funcion
//         total =0;
//         this.facturas.array.forEach(element => {
//             total+=element.importe;
//         });
//         return total;
//     }
// }
// EmpleadoVentas.prototype = Object.create(Empleado.prototype);
// EmpleadoVentas.prototype.constructor = EmpleadoVentas;

// function EmpleadoAntiguo(nombre,apellido,dni,salario){
//     EmpleadoVentas.call(this,nombre,apellido,dni);
//     if(salario<=0){
//         throw new Error("El salario debe ser mayor a cero");
//     }
//     this.salario = salario

//     this.mostrarSalario = function(){
//         return "El salario de "+this.nombre+" "+this.apellido+" es: " + calcularSueldo();
//     }

//     var calcularSueldo = function(){
//         return salario + this.calcularSalario();
//     }
// }

// EmpleadoAntiguo.prototype = Object.create(EmpleadoVentas.prototype);
// EmpleadoAntiguo.prototype.constructor = EmpleadoAntiguo;

// martin = new EmpleadoAntiguo("s","l",4,400);
//console.log(Object.getPrototypeOf(martin).constructor.name);

// class Empleado{
//     constructor(nombre,apellido,dni){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.dni = dni;
//     }

//     get salario(){
//         return "El salario es: " + this.calcularSalario(); 
//     }

//     calcularSalario(){}
// }

