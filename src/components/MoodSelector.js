import { useState } from 'react';
import { moods } from '../constants/moods';

export default function MoodSelector({ onSelect }) {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="my-6">
      <div className="flex justify-around">
        {moods.map(mood => (
          <button
            key={mood.id}
            className={`p-3 rounded-full text-3xl ${mood.color} ${
              selectedMood === mood.id ? 'ring-2 ring-gray-400' : ''
            }`}
            onClick={() => {
              setSelectedMood(mood.id);
              onSelect(mood.id);
            }}
            aria-label={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}