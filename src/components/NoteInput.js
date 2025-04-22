export default function NoteInput({ value, onChange }) {
  return (
    <div className="my-6">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Add a note..."
        rows="3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}