const { json } = require("body-parser");
const sql = require("./db.js");


const ReportRequest = function (report_id, client_id, prod_id, prod_category, init_date, end_date) {

};

ReportRequest.getReports = function () {
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
    }
        // NY
        // {
        //     report_id: 5,
        //     nombre: "Ventas por Tienda"
        // }, {
        //     report_id: 6,
        //     nombre: "Ventas por Producto por Tienda"
        // }, {
        //     report_id: 7,
        //     nombre: "Top 3 de Clientes"
        // }
    ];
};

ReportRequest.submitReport = (reportId, idTienda, idCliente, prodCategory, startDate, endDate, numberTop = 3, result) => {
    // let query_string = '';
    switch (reportId) {
        case 1: //"Dinero Recaudado"
            try {
                sql.query("SELECT SUM(detord.precioVenta) AS TotalRecaudado FROM ventas.ordenes ord JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden WHERE ord.idTienda = ? AND ord.fechaOrden >= ? AND ord.fechaOrden < ?;", [idTienda, startDate, endDate], (err, res) => {
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
            break;

        case 2: //"Pedidos por Cliente"
            try {
                sql.query("SELECT clt.nombre, clt.apellido, ord.idOrden, ord.fechaOrden FROM ventas.clientes clt JOIN ventas.ordenes ord ON clt.idCliente = ord.idCliente WHERE ord.idTienda = ? AND ord.fechaOrden >= ? AND ord.fechaOrden < ? ORDER BY clt.apellido, clt.nombre;", [idTienda, startDate, endDate], (err, res) => {
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
            break;

        case 3: //"Promedio Compras por Cliente"
            try {
                sql.query("SELECT clt.nombre, clt.apellido, avg(detord.precioVenta) as promedioCompras FROM ventas.clientes clt JOIN ventas.ordenes ord ON clt.idCliente = ord.idCliente JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden WHERE ord.idTienda = ? AND ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY clt.idCliente;", [idTienda, startDate, endDate], (err, res) => {
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
            break;

        case 4: //"Ventas por Producto"
            try {
                sql.query("SELECT catg.descripcion as Categoria, prod.nomProducto as NombreProducto, sum(detord.precioVenta) as Total FROM produccion.productos prod JOIN produccion.categorias catg ON prod.idCategoria = catg.idCategoria JOIN ventas.detalleOrden detord ON prod.idProducto = detord.idProducto JOIN ventas.ordenes ord ON detord.idOrden = ord.idOrden WHERE ord.idTienda = ? AND prod.idCategoria = ? AND ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY prod.idCategoria, prod.idProducto;", [idTienda, prodCategory, startDate, endDate], (err, res) => {
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
            break;

        case 5: //"Ventas por Tienda"

            try {
                sql.query("SELECT tnd.nomTienda, tnd.estado, sum(detord.precioVenta) as Ventas FROM ventas.tiendas tnd JOIN ventas.ordenes ord ON tnd.idTienda = ord.idTienda JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden WHERE ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY tnd.idTienda;", [startDate, endDate], (err, res) => {
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
            break;

        case 6: //"Ventas por Producto por Tienda"
            try {
                sql.query("SELECT tnd.nomTienda as Tienda, prod.nomProducto as NombreProducto, sum(detord.precioVenta) as Ventas FROM ventas.tiendas tnd JOIN ventas.ordenes ord ON tnd.idTienda = ord.idTienda JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden JOIN produccion.productos prod ON prod.idProducto = detord.idProducto  WHERE ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY tnd.idTienda, prod.idProducto;", [startDate, endDate], (err, res) => {
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
            break;

        case 7: //"Top 3 de Clientes"
            try {

                sql.query("SELECT clt.nombre, clt.apellido, sum(detord.precioVenta) as Ventas FROM ventas.clientes clt JOIN ventas.ordenes ord on clt.idCliente = ord.idCliente JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden WHERE ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY clt.idCliente ORDER BY Ventas DESC LIMIT ?;", [startDate, endDate, numberTop], (err, res) => {
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
            break;

        default:
            console.log("error: ", 'reporte no existe');
            result('reporte no existe', null);
            return;

    }


};

module.exports = ReportRequest;