const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { YtDlpWrap } = require('yt-dlp-wrap');

const app = express();
const PORT = process.env.PORT || 3000;

const ytdlp = new YtDlpWrap();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DOWNLOAD_DIR = path.join(__dirname, 'downloads');
if (!fs.existsSync(DOWNLOAD_DIR)) fs.mkdirSync(DOWNLOAD_DIR);

app.post('/download', async (req, res) => {
  const { url, format } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const outputTemplate = path.join(DOWNLOAD_DIR, `video-${Date.now()}.%(ext)s`);

    let args = [url, "-o", outputTemplate];
    if (format === "mp3") {
      args.push("-x", "--audio-format", "mp3");
    }

    await ytdlp.execPromise(args);

    const files = fs.readdirSync(DOWNLOAD_DIR);
    const latest = files
      .map(f => ({ name: f, time: fs.statSync(path.join(DOWNLOAD_DIR, f)).mtime.getTime() }))
      .sort((a, b) => b.time - a.time)[0];

    if (!latest) throw new Error("File not found");

    res.json({ download: `/download/${latest.name}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to download video' });
  }
});

app.get('/download/:file', (req, res) => {
  const filePath = path.join(DOWNLOAD_DIR, req.params.file);
  if (!fs.existsSync(filePath)) return res.status(404).send("File not found");

  res.download(filePath, err => {
    if (!err) {
      try { fs.unlinkSync(filePath); } catch (e) {}
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));