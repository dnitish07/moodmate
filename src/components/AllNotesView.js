import { useEffect, useState } from 'react';

export default function AllNotesView() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(savedEntries.reverse());
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Notes</h2>
      {entries.length === 0 ? (
        <p className="text-gray-500">No entries yet. Add your first mood log!</p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index}>
              <p className="font-medium">{entry.note}</p>
              <p className="text-sm text-gray-500">{formatDate(entry.date)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}