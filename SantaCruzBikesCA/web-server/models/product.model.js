const sql = require("./db.js");


const Product = function (name, price) {
    ;
    this.name = name;
    this.price = price;
};

Product.getProducts = result => {
    try {
        sql.query("SELECT idProducto AS prod_id, nomProducto AS name, precioVenta AS precio FROM produccion.productos;", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
    catch {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};

Product.getCategories = result => {
    try {
        sql.query("SELECT idCategoria AS report_id, descripcion AS nombre FROM produccion.categorias;", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
    catch {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};

module.exports = Product;