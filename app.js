/** @format */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

/**
 * Router-----------------
 */

app.use("/api", require("./routes/"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

dbConnect();
