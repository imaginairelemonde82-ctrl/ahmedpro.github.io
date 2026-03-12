
const express = require('express');
const cors = require('cors');
const { YtDlpWrap } = require('yt-dlp-wrap');
const path = require('path');
const fs = require('fs');

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
    const outputPath = path.join(DOWNLOAD_DIR, `video-${Date.now()}.%(ext)s`);
    let args = ['-o', outputPath];

    if (format === 'mp3') {
      args.push('-x', '--audio-format', 'mp3');
    }

    await ytdlp.execPromise([url, ...args]);

    const files = fs.readdirSync(DOWNLOAD_DIR);
    const latest = files
      .map(f => path.join(DOWNLOAD_DIR, f))
      .sort((a,b)=>fs.statSync(b).mtime - fs.statSync(a).mtime)[0];

    res.json({ download: '/download/' + path.basename(latest) });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Download failed' });
  }
});

app.get('/download/:file', (req,res)=>{
  const filePath = path.join(DOWNLOAD_DIR, req.params.file);
  res.download(filePath, err=>{
    if(!err) fs.unlinkSync(filePath);
  });
});

app.listen(PORT, ()=>console.log("Server running on port "+PORT));
