const { createNewReport, fetchAllReports, saveResponse, fetchResponse, resolveReport } = require('../../models/reporting/report.model') 

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

async function httpPostNewResponse(req, res) {
    console.log("new response");
    try {
        const info = req.body
        const result = await saveResponse(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpPostFetchResponses(req, res) {
    console.log("fetch user responses");
    try {
        const info = req.body
        const result = await fetchResponse(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpPostResolveReport(req, res) {
    console.log("Resolve Report");
    try {
        const info = req.body
        const result = await resolveReport(info);
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
    httpPostNewResponse,
    httpPostFetchResponses,
    httpPostResolveReport,
}