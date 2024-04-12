const { createNewReport, fetchAllReports } = require('../../models/reporting/report.model')

async function httpPostNewReport(req, res) {
    console.log("new report");
    try {
        const info = req.body
        const result = await createNewReport(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpGetAllReports(req, res) {
    console.log("all reports");
    try {
        const result = await fetchAllReports();
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

module.exports = {
    httpPostNewReport,
    httpGetAllReports,
}