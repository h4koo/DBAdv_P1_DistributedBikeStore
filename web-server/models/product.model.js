const sql = require("./db.js");


const Product = function (name, price) {
    ;
    this.name = name;
    this.price = price;
};

Product.getProducts = result => {
    sql.query("SELECT idProducto, nomProducto, precioVenta FROM productos;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("productos: ", res);
        result(null, res);
    });
};

Product.getCategories = result => {
    sql.query("SELECT * FROM categorias;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("categorias: ", res);
        result(null, res);
    });
};

module.exports = Product;