const styles = [
  { value: 'default', label: '📝 Default' },
  { value: 'social', label: '📱 Social Media' },
  { value: 'alt', label: '♿ Alt Text' }
];

export default function StyleSelector({ style, setStyle }) {
  return (
    <div className="flex gap-3 mb-6">
      {styles.map((s) => (
        <button
          key={s.value}
          onClick={() => setStyle(s.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            style === s.value
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400'
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
