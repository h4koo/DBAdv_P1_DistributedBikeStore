const SimplePerson = require("../models/simplePerson.model.js");
const SimpleInfo = require("../models/simpleInfo.model.js");
const Product = require("../models/product.model.js");


// Get all the clients from the DB
exports.getClients = (req, res) => {

    SimplePerson.getClients((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clients."
            });
        else res.send(data);
    });


};


// Retrieve all employees from the database
exports.getEmployees = (req, res) => {

};

// Retrieve all products from the database
exports.getProducts = (req, res) => {

};

// Retrieve all products from the database
exports.getProductCategories = (req, res) => {

};