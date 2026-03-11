import { useState } from 'react';
import axios from 'axios';

export default function ImageUploader({ setCaption, setLoading, style }) {
  const [preview, setPreview] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);
    setCaption('');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('style', style);

    try {
      const res = await axios.post('/api/caption', formData);
      setCaption(res.data.caption);
    } catch (err) {
      setCaption('❌ Error generating caption. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mb-6">
      <label className="block w-full cursor-pointer border-2 border-dashed border-blue-400 rounded-xl p-8 text-center hover:bg-blue-50 transition">
        <span className="text-blue-500 font-medium">Click to upload an image</span>
        <p className="text-gray-400 text-sm mt-1">JPG, PNG, WEBP — max 5MB</p>
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </label>
      {preview && (
        <img src={preview} alt="Preview" className="mt-4 rounded-xl w-full object-cover max-h-64" />
      )}
    </div>
  );
}
