module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { url } = req.query;
  if (!url) return res.status(400).json({ success: false, error: 'Missing url' });

  try {
    const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`;
    const r = await fetch(apiUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const json = await r.json();

    if (json.code !== 0 || !json.data) {
      return res.status(200).json({ success: false, error: json.msg || 'فشل جلب الفيديو' });
    }

    const d = json.data;
    const links = [];
    if (d.hdplay) links.push({ label: 'HD بدون علامة مائية', url: d.hdplay, type: 'hd' });
    if (d.play)   links.push({ label: 'SD بدون علامة مائية', url: d.play,   type: 'sd' });
    if (d.wmplay) links.push({ label: 'مع علامة مائية',      url: d.wmplay, type: 'wm' });

    return res.status(200).json({
      success: true,
      data: {
        title:      d.title || 'TikTok Video',
        author:     d.author?.nickname || '',
        cover:      d.cover || d.origin_cover || '',
        duration:   d.duration || 0,
        play_count: d.play_count || 0,
        digg_count: d.digg_count || 0,
        links
      }
    });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
};
