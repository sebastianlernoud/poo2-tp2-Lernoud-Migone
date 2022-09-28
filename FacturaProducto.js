const InfoProducto = require('./InfoProducto');

function FacturaProducto(pieza,cantidad){
    InfoProducto.call(this, pieza,cantidad);
    this.calcularPrecioRenglon = function(){
        return this.pieza.precio * this.cantidad;
    }
}

FacturaProducto.prototype = Object.create(InfoProducto.prototype);
FacturaProducto.prototype.constructor = FacturaProducto;
module.exports = FacturaProducto;