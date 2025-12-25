

const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');

async function loadJson() {
  const data = await fs.readFile('./data.json', 'utf-8');
  const json = JSON.parse(data);
  return json; // ✅ return before using
}

const app = express();
app.use(cors());

app.get('/recruiters', async (req, res) => {
  try {
    const data = await loadJson(); // ✅ await here!
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load JSON' });
  }
});


module.exports = app;

 