const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

// One arg means we're trying to fetch something out of Mongo
// Two args would mean we're trying to place something into Mongo
const User = mongoose.model("users");

// storing the user id into a cookie
// the user we've pulled out of the database
passport.serializeUser((user, done) => {
  // passport requires we call this function
  // first arg is an error object if one exists
  // second arg is the Mongo-assigned id
  done(null, user.id);
});

// use id that was stored in the cookie to get user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      // trust any proxy if our request goes through it
      // todo: figure out if this is ok from a security standpoint
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already have a record with the given google id
        return done(null, existingUser);
      }

      // don't have a record for this user, make a new record
      // creating a new model instance that represents the same user
      // this instance is from the promise callback and will be most up to date
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
