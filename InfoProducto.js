function InfoProducto(pieza,cantidad){
    if(Object.getPrototypeOf(pieza).constructor.name == "Pieza"){
        this.pieza = pieza;
    }else{
        throw new Error("Debe ser una pieza");
    }
    if(cantidad<=0){
        throw new Error("La cantidad debe ser mayor a cero");
    }
    this.cantidad = cantidad    
}
module.exports = InfoProducto;
