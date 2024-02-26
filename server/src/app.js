// Library Imports
const express = require('express')
const app = express();
const cors = require('cors')

// local Imports
const authRouter = require('./routes/userAuth/userAuth.route')

app.use(cors())
app.use(express.json())

app.use('/api/auth/', authRouter)


module.exports = app