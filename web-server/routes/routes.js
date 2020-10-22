module.exports = app => {
    const general = require("../controllers/general.controller.js");
    const reports = require("../controllers/reports.controller.js");
    const sale = require("../controllers/sale.controller.js");


    //---- General ------
    // Retrieve all Clients
    app.get("/api/clients", general.getClients);

    // Retrieve all Employees
    app.get("/api/empleados", general.getEmployees);

    // Retrieve all Products
    app.get("/api/productos", general.getProducts);

    // Retrieve all ProductCategories
    app.get("/api/clients", general.getProductCategories);


    //---- Reportes ------
    // Retrieve all Reports
    app.get("/api/reportes", reports.getReports);

    // Run specified Report and retireve results
    app.get("/api/reportes/:reportId", reports.getReportResult);


    //---- Venta ------
    // Create a new sale in the system
    app.post("/api/venta", sale.createOrder);

};