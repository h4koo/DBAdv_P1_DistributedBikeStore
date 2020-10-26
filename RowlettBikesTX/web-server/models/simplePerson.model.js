
const sql = require("./db.js");


const SimplePerson = function (name, lastname) {
    this.name = name;
    this.lastname = lastname;
};


SimplePerson.getClients = result => {
    sql.query("SELECT idCliente AS person_id, CONCAT(nombre,' ',apellido) AS name FROM ventas.clientes", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

SimplePerson.getEmployees = result => {
    sql.query("SELECT idEmpleado as person_id, CONCAT(nombre, ' ', apellido) as name FROM ventas.empleados", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("empleados: ", res);
        result(null, res);
    });
};

module.exports = SimplePerson;