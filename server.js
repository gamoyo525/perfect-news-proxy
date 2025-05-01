const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

// APIキーとNewsAPIのURL
const API_KEY = 'YOUR_API_KEY';  // ここに自分のAPIキーを入れてください
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'jp',  // 日本のニュースを取得
        apiKey: API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
