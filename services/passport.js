const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

// One arg means we're trying to fetch something out of Mongo
// Two args would mean we're trying to place something into Mongo
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id });
      new User({ googleId: profile.id }).save();
    }
  )
);
