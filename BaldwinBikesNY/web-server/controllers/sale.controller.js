const OrderInfo = require("../models/order.model.js");

// Tries to crate a new order on the DB with the supplied information
exports.createOrder = (req, res) => {

    // cambiar idTienda dependiendo del server ######################################################################
    let idTienda = 2; // Baldwin Bikes

    let idCliente = req.body.client_id;
    let idEmp = req.body.emp_id;
    let fecha_entrega = req.body.req_date;

    let numItems = 0;
    let products = '';
    let quantities = '';

    // loop to fill items and quantities array
    while (numItems < req.body.items.length) {
        products += req.body.items[numItems].prod_id;
        quantities += req.body.items[numItems].cant;

        if (numItems == req.body.items.length) {
            break;
        }
        else {
            products += ',';
            quantities += ',';
        }

        numItems++;
    }



    OrderInfo.createOrder(idTienda, idCliente, idEmp, fecha_entrega, products, quantities, numItems, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while trying to submit orde to Database."
            });
        else res.send(data);
    });
};


