function Stock(){
    this.listaProductos = [];
    this.agregarStock = function(producto){
        if(Object.getPrototypeOf(producto).constructor.name == "StockProducto"){
            throw new Error("Debe ser de tipo StockProducto");
        }
        this.listaProductos.push(producto);
    }
}

module.exports = Stock;




// function Factura(id,vendedor){
//     this.id = id;
//     if (Object.getPrototypeOf(martin).constructor.name == "EmpleadoAntiguo" ||Object.getPrototypeOf(martin).constructor.name == "EmpleadoVentas"){
//         this.vendedor = vendedor;
//     }else{
//         throw new Error("Debe asignarse un vendedor que pueda vender");
//     }
//     this.importe = calcularimporte();
//     this.renglones = [];

//     this.sumarRenglones = function(renglon){
//         this.renglones.push(renglon);
//     }

//     this.calcularImporte = function(){
//         this.renglones.forEach(element => {
//             total += element.calcularPrecioRenglon();
//         });
//         return total;
//     }
// }

// function Pieza(nombre,precio){
//     this.nombre=nombre;
//     this.precio = precio;
// }

// function InfoProducto(pieza,cantidad){
//     if(Object.getPrototypeOf(pieza).constructor.name == "Pieza"){
//         this.pieza
//     }else{
//         throw new Error("Debe ser una pieza");
//     }
//     if(cantidad<=0){
//         throw new Error("La cantidad debe ser mayor a cero");
//     }
//     this.cantidad = cantidad    
// }

// function FacturaProducto(pieza,cantidad){
//     InfoProducto.call(this, pieza,cantidad);
//     this.calcularPrecioRenglon = function(){
//         return this.pieza.precio * this.cantidad;
//     }
// }

// FacturaProducto.prototype = Object.create(InfoProducto.prototype);
// FacturaProducto.prototype.constructor = FacturaProducto;



// function StockProducto(pieza,cantidad){
//     InfoProducto.call(this,pieza,cantidad);
// }

// StockProducto.prototype = Object.create(InfoProducto.prototype);
// StockProducto.prototype.constructor = StockProducto;