const { json } = require("body-parser");
const sql = require("./db.js");


const ReportRequest = function (report_id, client_id, prod_id, prod_category, init_date, end_date) {

};

ReportRequest.getReports = () => {
    return [{
        // CA & TX
        report_id: 1,
        nombre: "Dinero Recaudado"
    }, {
        report_id: 2,
        nombre: "Pedidos por Cliente"
    }, {
        report_id: 3,
        nombre: "Promedio Compras por Cliente"
    }, {
        report_id: 4,
        nombre: "Ventas por Producto"
    },
    // NY
    {
        report_id: 5,
        nombre: "Ventas por Tienda"
    }, {
        report_id: 6,
        nombre: "Ventas por Producto por Tienda"
    }, {
        report_id: 7,
        nombre: "Top 3 de Clientes"
    }];
};

ReportRequest.submitReport = () => {

    switch (this.report_id) {
        case 1: //"Dinero Recaudado"

            break;

        case 2: //"Pedidos por Cliente"

            break;

        case 3: //"Promedio Compras por Cliente"

            break;

        case 4: //"Ventas por Producto"

            break;

        case 5: //"Ventas por Tienda"

            break;

        case 6: //"Ventas por Producto por Tienda"

            break;

        case 7: //"Top 3 de Clientes"

            break;

        default:
            break;
    }

};
