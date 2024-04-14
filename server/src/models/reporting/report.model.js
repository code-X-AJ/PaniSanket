const reportSchema = require('./report.mongo')

async function createNewReport(info) {
    try {
        var { userId, title, description, city, address, image } = info;
        let report = await reportSchema.create({ userId, title, description, city, address, image })
        delete report.image;
        return { msg: "report submited successfully", status: true, report }
    } catch (error) {
        console.error(error);
    }
}

async function fetchAllReports() {
    try {
        const reports = await reportSchema.find().sort({createdAt:-1});
        if (reports.length==0) {
            return { msg: "No reports found", status: false }
        }
        else {
            return ({ status: true, reports: reports })
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = { createNewReport, fetchAllReports }