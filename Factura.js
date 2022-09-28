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


