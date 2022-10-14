const mongoose = require("mongoose");
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("dotenv").config();
// need to require User model before passport
// so that we're not trying to use it before we define it
require("./models/User");
require("./services/passport");

mongoose.connect(process.env.MONGO_URI);

const app = express();

// app.use wiring up different middlewares
app.use(
  cookieSession({
    // 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // string we come up with to encrypt cookie
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Require statement returns a function
// Which we immediately invoke with app
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
