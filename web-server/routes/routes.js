module.exports = app => {
    const general = require("../controllers/general.controller.js");
    const reports = require("../controllers/reports.controller.js");
    const sale = require("../controllers/sale.controller.js");


    //---- General ------
    // Retrieve all Clients
    app.get("/api/clients", general.getClients);

    // Retrieve all Employees
    app.get("/api/employees", general.getEmployees);

    // Retrieve all Products
    app.get("/api/products", general.getProducts);

    // Retrieve all ProductCategories
    app.get("/api/productcategories", general.getProductCategories);


    //---- Reportes ------
    // Retrieve all Reports
    app.get("/api/reports", reports.getReports);

    // Run specified Report and retireve results
    app.put("/api/reports/:reportId", reports.getReportResult);


    //---- Venta ------
    // Create a new sale in the system
    app.post("/api/sale", sale.createOrder);

};