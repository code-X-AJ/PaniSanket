const reportRouter = require('express').Router()
const { httpPostNewReport, httpGetAllReports } = require('./report.controller')

reportRouter.post('/newReport', httpPostNewReport);
reportRouter.get('/allReports', httpGetAllReports);

module.exports = reportRouter
