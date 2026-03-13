// api/download.js — Vercel Serverless Function
// Runs on the SERVER, so no CORS issues at all

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, error: 'Missing url' });
  }

  const isTikTok = /tiktok\.com|douyin\.com|vm\.tiktok\.com|vt\.tiktok\.com/.test(url);
  if (!isTikTok) {
    return res.status(400).json({ success: false, error: 'Not a TikTok URL' });
  }

  // Try multiple APIs in order
  const apis = [
    () => fetchFromTikwm(url),
    () => fetchFromDouyinWtf(url),
  ];

  for (const apiFn of apis) {
    try {
      const result = await apiFn();
      if (result) return res.status(200).json({ success: true, data: result });
    } catch (e) {
      console.warn('API failed:', e.message);
    }
  }

  return res.status(500).json({ success: false, error: 'Could not fetch video. Try again.' });
}

async function fetchFromTikwm(url) {
  const r = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const json = await r.json();
  if (json.code !== 0 || !json.data) throw new Error(json.msg || 'tikwm failed');
  const d = json.data;
  return {
    title: d.title || 'TikTok Video',
    author: d.author?.nickname || '',
    avatar: d.author?.avatar || '',
    cover: d.cover || d.origin_cover || '',
    duration: d.duration || 0,
    play_count: d.play_count || 0,
    digg_count: d.digg_count || 0,
    links: [
      d.hdplay && { label: 'HD بدون علامة مائية', url: d.hdplay, type: 'hd' },
      d.play   && { label: 'SD بدون علامة مائية', url: d.play,   type: 'sd' },
      d.wmplay && { label: 'مع علامة مائية',       url: d.wmplay, type: 'wm' },
    ].filter(Boolean)
  };
}

async function fetchFromDouyinWtf(url) {
  const r = await fetch(`https://api.douyin.wtf/api?url=${encodeURIComponent(url)}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const json = await r.json();
  if (!json.video_data) throw new Error('douyin.wtf failed');
  const d = json.video_data;
  return {
    title: json.desc || 'TikTok Video',
    author: json.author?.nickname || '',
    avatar: '',
    cover: d.cover || '',
    duration: 0,
    play_count: 0,
    digg_count: 0,
    links: [
      d.nwm_video_url_HQ && { label: 'HD بدون علامة مائية', url: d.nwm_video_url_HQ, type: 'hd' },
      d.nwm_video_url    && { label: 'SD بدون علامة مائية', url: d.nwm_video_url,    type: 'sd' },
      d.wm_video_url     && { label: 'مع علامة مائية',       url: d.wm_video_url,     type: 'wm' },
    ].filter(Boolean)
  };
}
