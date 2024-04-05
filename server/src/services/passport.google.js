const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const User = require("../models/userAuth/user.mongo")

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const initGooglePassport = () => {
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
      const newUser = {
        name: profile.displayName,
        email: profile.emails[0].value
      }
      try {
        let user = await User.findOne({ googleId: profile.id })
        if (user) {
          cb(null)
        }
        else {
          user = await User.create(newUser)
          cb(null, user)
        }
      } catch (err) {
        console.error(err)
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    const data = {}
    try {
      const data = await User.findById(id)
      done(null, data);
    } catch (err) {
      done(err, data)
    }
  })

}

module.exports = {initGooglePassport}
