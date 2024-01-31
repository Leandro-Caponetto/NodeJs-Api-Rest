/** @format */

const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filname: {
      type: String,
    },
  },
  {
    timestamps: true, //Crea campos createdAt y updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageScheme);
