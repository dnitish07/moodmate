export default function SaveButton({ mood, note, weather }) {
  const handleSave = () => {
    if (!mood) {
      alert('Please select a mood first!');
      return;
    }

    const entry = {
      date: new Date().toISOString(),
      mood,
      note: note || 'No note added',
      weather
    };

    const entries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    entries.push(entry);
    localStorage.setItem('moodEntries', JSON.stringify(entries));
    
    alert('Entry saved successfully!');
    window.location.reload();
  };

  return (
    <button
      onClick={handleSave}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
    >
      Save
    </button>
  );
}