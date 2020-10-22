const ReportRequest = require("../models/reportRequest.model.js");

// Get all the possible reports
exports.getReports = (req, res) => {
    res.send(ReportRequest.getReports());
};

// Run especified report in the database and return results
exports.getReportResult = (req, res) => {

};
