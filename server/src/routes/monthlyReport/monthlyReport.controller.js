const { fetchAllReports } = require('../../models/reporting/report.model')
const { fetchAllNotification } = require('../../models/notification/notification.model')


async function httpGetMonReport(req, res) {
    console.log("get monthly report");
    try {
        const reports = await fetchAllReports();
        const notify = await fetchAllNotification();
        const data = {reports , notify}
        
        console.log("data....", data);
        return res.json({status: true, data})

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ status: false, "msg": err.message })
    }
}

module.exports = {
    httpGetMonReport,
}