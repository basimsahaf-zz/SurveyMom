/* Constants */
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//tells the passport how to implement GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken)=> {
    console.log(accessToken);
}));


//route handler
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

//Environment variable injected by Heroku, uses port 5000 if environment variable is missing
/* =====================================================================*/
const PORT = process.env.PORT || 5000;
/* =====================================================================*/


//Express directs Node to listen to PORT
app.listen(PORT);
