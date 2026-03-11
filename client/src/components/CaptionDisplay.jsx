export default function CaptionDisplay({ caption, loading }) {
  if (loading) return <p className="text-blue-500 animate-pulse">🤖 Generating caption...</p>;
  if (!caption) return null;

  const copy = () => navigator.clipboard.writeText(caption);

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow p-6 mt-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Generated Caption</h2>
      <p className="text-gray-800">{caption}</p>
      <button
        onClick={copy}
        className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        📋 Copy to Clipboard
      </button>
    </div>
  );
}
