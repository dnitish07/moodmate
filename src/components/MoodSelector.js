import { useState } from 'react';
import { moods } from '../constants/moods';

export default function MoodSelector({ onSelect }) {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="my-8">
      <div className="flex justify-around">
        {moods.map(mood => (
          <button
            key={mood.id}
            className={`mood-btn ${mood.color} ${
              selectedMood === mood.id 
                ? 'ring-4 ring-indigo-200 scale-110' 
                : 'opacity-80 hover:opacity-100'
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