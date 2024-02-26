const authRouter = require('express').Router()
const {httpPostSignup,httpPostLogin} = require('./userAuth.controller')

authRouter.post('/signup',httpPostSignup);
authRouter.post('/login', httpPostLogin);

module.exports = authRouter
