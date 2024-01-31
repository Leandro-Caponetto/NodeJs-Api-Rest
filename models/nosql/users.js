/** @format */

const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    rol: {
      type: ["user", "admin"],
    },
  },
  {
    timestamps: true, //Crea campos createdAt y updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme);
