const sql = require("./db.js");


const Order = function () {

};

Order.createOrder = (idTienda, idCliente, idEmp, fecha_entrega, products, quantities, numItems, result) => {
    // CreateOrder (storeID INT, clientID INT, empID INT, fechaEntrega DATE, productIDs VARCHAR(400), productQty VARCHAR(400), numItems INT)
    try {
        sql.query("CALL CreateOrder(?, ?, ?, ?, ?, ?, ?);", [idTienda, idCliente, idEmp, fecha_entrega, products, quantities, numItems], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("empleados: ", res);
            result(null, res);
        });
    }
    catch {
        console.log("error: ", err);
        result(err, null);
        return;
    }

}

module.exports = Order;