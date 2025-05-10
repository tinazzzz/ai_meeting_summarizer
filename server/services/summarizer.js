const axios = require("axios");

async function getSummary(text) {
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  const API_KEY = process.env.GEMINI_API_KEY;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: `Summarize the following meeting transcript in brevity. Only include the summary and nothing else in your response:\n\n${text}`
          }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, requestBody, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const summary = response.data.candidates[0].content.parts[0].text;
    return summary;
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    throw new Error("Failed to get summary from Gemini");
  }
}

module.exports = { getSummary };
