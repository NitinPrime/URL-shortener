import Url from '../models/Url.js';
import shortid from 'shortid';

export const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'Full URL is required' });
  }

  try {
    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json({
        originalUrl: url.originalUrl,
        shortUrlCode: url.shortUrlCode,
        shortUrl: `http://localhost:5000/${url.shortUrlCode}`,
      });
    }

    let shortUrlCode;
    let existing;

    // Ensure uniqueness
    do {
      shortUrlCode = shortid.generate();
      existing = await Url.findOne({ shortUrlCode });
    } while (existing);

    url = new Url({ originalUrl, shortUrlCode });
    await url.save();

    res.json({
      originalUrl: url.originalUrl,
      shortUrlCode: url.shortUrlCode,
      shortUrl: `http://localhost:5000/${url.shortUrlCode}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
