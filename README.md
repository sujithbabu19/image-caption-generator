# 🖼️ Image Caption Generator — AI-Powered Image Descriptions

> Upload any image and instantly get AI-generated captions, alt text, and social media posts. Powered by Hugging Face vision models.

![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20Hugging%20Face-blue)

---

## 🚀 What It Does

- 📸 Upload any image (JPG, PNG, WEBP)
- 🤖 AI generates a natural language description
- 📱 Get ready-to-use social media captions
- ♿ Generate accessible alt text for web use
- 🌍 Supports multiple caption styles and tones

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend UI |
| Node.js + Express | Backend API |
| Hugging Face API | Vision AI model (BLIP / ViT-GPT2) |
| Tailwind CSS | Styling |
| Multer | Image upload handling |

---

## 📁 Project Structure

```
image-caption-generator/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUploader.jsx
│   │   │   ├── CaptionDisplay.jsx
│   │   │   └── StyleSelector.jsx
│   │   └── App.jsx
├── server/
│   ├── routes/
│   │   └── caption.js
│   ├── utils/
│   │   └── huggingface.js
│   └── server.js
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Hugging Face API Key (free)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/image-caption-generator.git
cd image-caption-generator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run the app
npm run dev
```

---

## 🔑 Environment Variables

```env
HUGGINGFACE_API_KEY=your_huggingface_key
PORT=5000
```

---

## 📸 Screenshots

> Coming soon — UI in progress

---

## 🗺️ Roadmap

- [~] Project setup
- [ ] Image upload UI
- [ ] Connect Hugging Face vision model
- [ ] Display generated captions
- [ ] Add caption style options (formal, casual, social media)
- [ ] Copy to clipboard feature
- [ ] Deploy on Render + Vercel

---

## 🧠 What I Learned

- Multimodal AI — vision + language models
- Hugging Face Inference API
- File uploads with Multer in Express

---

## 📬 Connect

**GitHub:** [@yourusername](https://github.com/yourusername)  
**LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
