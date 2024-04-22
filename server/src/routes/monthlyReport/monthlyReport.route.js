const monthlyRouter = require('express').Router()
const { httpGetMonReport } = require('./monthlyReport.controller')

monthlyRouter.get('/monthlyData', httpGetMonReport);

module.exports = monthlyRouter
