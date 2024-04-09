const notificationRouter = require('express').Router()
const { httpPostNewNotification, httpGetAllNotification } = require('./notification.controller')

notificationRouter.post('/newNotify', httpPostNewNotification);
notificationRouter.get('/allNotify', httpGetAllNotification);

module.exports = notificationRouter
