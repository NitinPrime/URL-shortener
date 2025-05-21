import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './routes/urlRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/url', urlRoutes);

app.get('/:shortUrlCode', async (req, res) => {
  const { shortUrlCode } = req.params;
  const Url = (await import('./models/Url.js')).default;
  try {
    const url = await Url.findOne({ shortUrlCode });
    if (url) {
      return res.redirect(url.originalUrl);
    }
    res.status(404).json({ error: 'No URL found for this code' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

const mongoURI = 'mongodb://localhost:27017/urlShortenerDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
