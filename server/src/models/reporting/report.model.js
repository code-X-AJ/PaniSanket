const reportSchema = require('./report.mongo')
const responseSchema = require('./response.mongo')

async function createNewReport(info) {
    try {
        var { userId, title, description, city, address, image } = info;
        let report = await reportSchema.create({ userId, title, description, city, address, image })
        delete report.image;
        return { msg: " submited successfully", status: true, report }
    } catch (error) {
        console.error(error);
    }
}

async function saveResponse(info) {
    try {
        var { message, sender, report } = info;
        console.log(message, sender, report);
        let response = await responseSchema.create({ message:{ text: message }, sender, report })
        await reportSchema.findByIdAndUpdate(report, {
            isPending: false,
            isProgress: true,
        });

        return { msg: "submited successfully", status: true, response }
    } catch (error) {
        console.error(error);
    }
}


async function resolveReport(info) {
    try {
        var { report } = info;
        console.log(report);
        await reportSchema.findByIdAndUpdate(report, {
            isPending: false,
            isProgress: false,
            isResolved: true,
        });

        return { msg: "submited successfully", status: true }
    } catch (error) {
        console.error(error);
    }
}


async function fetchResponse(info) {
    try {
        var { report } = info;
        console.log("reportid,,,,,", report);
        let response = await responseSchema.find({report})
        console.log("user response.....", response);

        return { msg: "submited successfully", status: true, response }
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

module.exports = { createNewReport, fetchAllReports, saveResponse, fetchResponse, resolveReport }