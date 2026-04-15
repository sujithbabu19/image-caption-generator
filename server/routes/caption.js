const express = require('express');
const multer = require('multer');
const { generateCaption } = require('../utils/huggingface');

const router = express.Router();

// Multer config —store in /uploads,accept images  only
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    allowed.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'));
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// POST /api/caption — upload image and get caption
router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: ' alret No image uploaded' });

    const style = req.body.style || 'default';
    const caption = await generateCaption(req.file.path, style);

    res.json({ caption, filename: req.file.filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Caption generation failed' });
  }
});

module.exports = router;
