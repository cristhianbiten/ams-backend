const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nome: String,
    email: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;