const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
// need to require User model before passport
// so that we're not trying to use it before we define it
require("./models/User");
require("./services/passport");

mongoose.connect(process.env.mongoURI);

const app = express();

// Require statement returns a function
// Which we immediately invoke with app
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
