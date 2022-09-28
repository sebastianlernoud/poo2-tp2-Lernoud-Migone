const InfoProducto = require('./InfoProducto');

function StockProducto(pieza,cantidad){
    InfoProducto.call(this,pieza,cantidad);
}

StockProducto.prototype = Object.create(InfoProducto.prototype);
StockProducto.prototype.constructor = StockProducto;
module.exports = StockProducto;