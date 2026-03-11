import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import CaptionDisplay from './components/CaptionDisplay';
import StyleSelector from './components/StyleSelector';

export default function App() {
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState('default');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">🖼️ Image Caption Generator</h1>
      <p className="text-gray-500 mb-8">Upload an image and get AI-powered captions instantly</p>

      <StyleSelector style={style} setStyle={setStyle} />
      <ImageUploader setCaption={setCaption} setLoading={setLoading} style={style} />
      <CaptionDisplay caption={caption} loading={loading} />
    </div>
  );
}
