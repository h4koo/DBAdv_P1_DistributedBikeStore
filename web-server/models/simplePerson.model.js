
const sql = require("./db.js");


const SimplePerson = function (name, lastname) {
    this.name = name;
    this.lastname = lastname;
};

SimplePerson.getClients = result => {
    sql.query("SELECT idCliente, nombre, apellido FROM clientes", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("clientes: ", res);
        result(null, res);
    });
};


SimplePerson.getEmployees = result => {
    sql.query("SELECT idEmpleado, nombre, apellido FROM empleados", (err, res) => {
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