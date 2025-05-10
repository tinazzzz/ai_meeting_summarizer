const express = require("express");
const router = express.Router();
const { summarize } = require("../controllers/summarizeController");

router.post("/", summarize);

module.exports = router;
