/** @format */

const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/tracks");

const router = express.Router();

router.get("/", getItems);

router.post("/", validateObjectDataCreate, createItem);

module.exports = router;
