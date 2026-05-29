import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/translate", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|de`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json({
      translatedText: data.responseData.translatedText,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Translation failed." });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});