const ReportRequest = require("../models/reportRequest.model.js");

// Get all the possible reports
exports.getReports = (req, res) => {
    res.send(ReportRequest.getReports());
};

// Run especified report in the database and return results
exports.getReportResult = (req, res) => {

    // cambiar idTienda dependiendo del server ######################################################################
    let idTienda = 1;

    let reportId = req.params.tagId;
    let idCliente = req.body.client_id;
    let prodCategory = req.body.prod_category;
    let startDate = req.body.init_date;
    let endDate = req.body.end_date;

    ReportRequest.submitReport(reportId, idTienda, idCliente, prodCategory, startDate, endDate, 3, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while submiting the report."
            });
        else res.send(data);
    });
};
