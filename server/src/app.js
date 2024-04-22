// Library Imports
const express = require('express')
const app = express();
const cors = require('cors')
const passport = require("passport")
const session = require("express-session")

// local Imports
const authRouter = require('./routes/userAuth/userAuth.route')
const notifyRouter = require('./routes/notification/notification.route')
const reportRouter = require('./routes/reporting/report.route')
const monthlyReport = require('./routes/monthlyReport/monthlyReport.route')
const { initGooglePassport } = require("./services/passport.google")

app.use(cors());

initGooglePassport();
app.use(session({
    name:"Session",
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json({ limit: '50mb' }));

app.use('/api/auth/', authRouter)
app.use('/api/report/', reportRouter)
app.use('/api/notify/', notifyRouter)
app.use('/api/monthly/', monthlyReport)


module.exports = app