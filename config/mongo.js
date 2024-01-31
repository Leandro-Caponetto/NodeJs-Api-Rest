/** @format */
require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  const data = [{ mongodb: ` **** THE CONNECTION TO MONGODB IS CORRECT ****` }];
  try {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
      throw new Error("DB_URI environment variable is not defined");
    }

    await mongoose.connect(DB_URI, {});

    console.table(data);
  } catch (error) {
    console.error("**** Error connecting to the database ****");
    console.error(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
