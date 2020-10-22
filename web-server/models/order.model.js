const sql = require("./db.js");


const Order = function (clientID, empId, items) {
    ;
    this.clientID = clientID;
    this.empId = empId;
    this.items = items;
};

module.exports = Order;