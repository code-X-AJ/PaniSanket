const authRouter = require('express').Router()
const passport = require('passport');
const { httpPostSignup, httpPostLogin } = require('./userAuth.controller')

authRouter.post('/signup', httpPostSignup);
authRouter.post('/login', httpPostLogin);

// google Auth
authRouter.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }))

authRouter.get("/google/callback",
    passport.authenticate('google',
        { failureRedirect: "http://localhost:3000/signup" }),
    function (req, res) { res.redirect('http://localhost:3000/'); }
)


module.exports = authRouter
