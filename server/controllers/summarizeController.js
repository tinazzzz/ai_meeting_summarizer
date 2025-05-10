const { getSummary } = require("../services/summarizer");

const summarize = async (req, res) => {
  const { transcript } = req.body;
  try {
    const summary = await getSummary(transcript);
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error summarizing transcript.");
  }
};

module.exports = { summarize };
