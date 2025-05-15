const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // CORS許可

app.get("/news", async (req, res) => {
  console.log("✅ /news にアクセスがありました");
  console.log("🔑 API KEY:", process.env.NEWS_API_KEY); // 一時的に確認用
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("❌ API 取得エラー:", error.message);
    res.status(500).json({ error: "ニュースの取得に失敗しました" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
