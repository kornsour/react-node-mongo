// destructuring Schema out of mongoose library
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
