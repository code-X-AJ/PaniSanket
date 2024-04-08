const { createNewReport, fetchAllReports } = require('../../models/reporting/report.model')

async function httpPostNewReport(req, res) {
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
    try {
        const result = await fetchAllReports();
        console.log(result);
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