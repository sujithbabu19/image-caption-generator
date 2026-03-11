const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL_URL = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base';

/**
 * Send image to Hugging Face BLIP model and return caption
 * @param {string} imagePath - Local path to uploaded image
 * @param {string} style - Caption style: 'default' | 'social' | 'alt'
 */
async function generateCaption(imagePath, style = 'default') {
  const imageBuffer = fs.readFileSync(imagePath);

  const response = await axios.post(MODEL_URL, imageBuffer, {
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      'Content-Type': 'application/octet-stream'
    }
  });

  const rawCaption = response.data[0]?.generated_text || 'No caption generated';

  // Style formatting (expand later)
  const styled = formatCaption(rawCaption, style);
  return styled;
}

function formatCaption(caption, style) {
  switch (style) {
    case 'social':
      return `✨ ${caption} #photography #AI #imageAI`;
    case 'alt':
      return `Alt text: ${caption}`;
    default:
      return caption;
  }
}

module.exports = { generateCaption };
