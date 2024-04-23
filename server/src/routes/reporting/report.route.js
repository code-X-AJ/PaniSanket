const reportRouter = require('express').Router()
const { httpPostNewReport, httpGetAllReports, httpPostNewResponse, httpPostFetchResponses, httpPostResolveReport} = require('./report.controller')

reportRouter.post('/newReport', httpPostNewReport);
reportRouter.get('/allReports', httpGetAllReports);
reportRouter.post('/newResponse', httpPostNewResponse);
reportRouter.post('/fetchResponses', httpPostFetchResponses);
reportRouter.post('/resolveReport', httpPostResolveReport);

module.exports = reportRouter
