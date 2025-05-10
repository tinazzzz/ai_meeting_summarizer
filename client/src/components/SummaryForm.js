import React, { useState } from "react";
import axios from "axios";

function SummaryForm() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary("");

    try {
      const response = await axios.post("http://localhost:5000/summarize", {
        transcript,
      });

      setSummary(response.data.summary);
    } catch (err) {
      setSummary("Error getting summary. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h2>AI Meeting Summary Tool</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          placeholder="Paste meeting transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </form>

      {summary && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Summary:</h3>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
}

export default SummaryForm;
