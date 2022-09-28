function Factura(id,vendedor){
    this.id = id;
    if (Object.getPrototypeOf(vendedor).constructor.name == "EmpleadoAntiguo" ||Object.getPrototypeOf(vendedor).constructor.name == "EmpleadoVentas"){
        this.vendedor = vendedor;
    }else{
        throw new Error("Debe asignarse un vendedor que pueda vender");
    }
    
    this.importe = 0;
    this.renglones = [];

    this.sumarRenglones = function(renglon){
        this.renglones.push(renglon);
    }

    this.calcularImporte = function(){
        total = 0;
        this.renglones.forEach(element => {
            total += element.calcularPrecioRenglon();
        });
        this.importe = total;
    }
   
}
module.exports = Factura;
// class Factura{

//     constructor(id,razonSocial,pieza,cantPiezas){
//         this.id = id;
//         this.razonSocial = razonSocial;
//         this.pieza = pieza;
//         this.cantPiezas = cantPiezas;
//         this.valor = this.calcularMontoTotal();
//     }

//     calcularMontoTotal(){
//         let monto = this.calcularPrecio * this.cantPiezas;
//         return monto;
//     }

//     get calcularPrecio(){
//         return this.pieza.precio;
//     }
// }

