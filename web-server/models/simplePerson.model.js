
const sql = require("./db.js");


const SimplePerson = function (id, name, lastname) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
};

SimplePerson.getClients = result => {
    sql.query("SELECT * FROM clientes", (err, res) => {
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
    sql.query("SELECT * FROM empleados", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("empleados: ", res);
        result(null, res);
    });
};