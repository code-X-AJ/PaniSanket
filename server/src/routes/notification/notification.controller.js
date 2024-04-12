const { createNewNotification, fetchAllNotification } = require('../../models/notification/notification.model')

async function httpPostNewNotification(req, res) {
    try {    console.log("new notify");

        const info = req.body
        const result = await createNewNotification(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpGetAllNotification(req, res) {
    try {    console.log("all notify");
        const result = await fetchAllNotification();
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

module.exports = {
    httpPostNewNotification,
    httpGetAllNotification,
}