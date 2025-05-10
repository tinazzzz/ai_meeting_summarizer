const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const summarizeRoute = require("./routes/summarizeRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/summarize", summarizeRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
