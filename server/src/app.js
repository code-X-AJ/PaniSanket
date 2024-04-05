// Library Imports
const express = require('express')
const app = express();
const cors = require('cors')
const passport = require("passport")
const session = require("express-session")

// local Imports
const authRouter = require('./routes/userAuth/userAuth.route')
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

app.use(express.json())

app.use('/api/auth/', authRouter)


module.exports = app