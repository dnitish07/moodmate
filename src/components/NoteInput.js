export default function NoteInput({ value, onChange }) {
  return (
    <div className="my-6">
      <textarea
        className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none 
                  focus:ring-2 focus:ring-indigo-200 focus:border-transparent
                  transition-all"
        placeholder="How was your day? Share your thoughts..."
        rows="4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}