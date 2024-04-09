const notifySchema = require('./notification.mongo')

async function createNewNotification(info) {
    try {
        var { userId, title, description, address, date, time } = info;
        console.log("values are ", userId, title, description, address, date, time);
        let notification = await notifySchema.create({ userId, title, description, address, date, time })
        delete notification.userId;
        return { msg: "notification created successfully", status: true, notification }
    } catch (error) {
        console.error(error);
    }
}

async function fetchAllNotification() {
    try {
        const notifications = await notifySchema.find();
        if (notifications.length == 0) {
            return { msg: "No notifications found", status: false }
        }
        else {
            return ({ status: true, notifications: notifications })
        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = { createNewNotification, fetchAllNotification }