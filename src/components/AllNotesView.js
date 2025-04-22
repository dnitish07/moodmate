import { useEffect, useState } from 'react';
import { moods } from '../constants/moods';

export default function AllNotesView() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(savedEntries.reverse());
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredEntries = filter === 'all' 
    ? entries 
    : entries.filter(entry => {
        const mood = moods.find(m => m.id === entry.mood);
        return mood && mood.label.toLowerCase() === filter.toLowerCase();
      });

  const getMoodColor = (moodId) => {
    const mood = moods.find(m => m.id === moodId);
    return mood ? mood.color : 'bg-gray-100';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Journal</h2>
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="all">All moods</option>
          {moods.map(mood => (
            <option key={mood.id} value={mood.label}>{mood.label}</option>
          ))}
        </select>
      </div>

      {filteredEntries.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No entries found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredEntries.map((entry, index) => {
            const mood = moods.find(m => m.id === entry.mood);
            return (
              <div 
                key={index} 
                className={`p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all ${getMoodColor(entry.mood)}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-800">{entry.note}</p>
                    <p className="text-sm text-gray-500 mt-1">{formatDate(entry.date)}</p>
                  </div>
                  <span className="text-2xl ml-2">{mood?.emoji}</span>
                </div>
                
                {entry.weather && (
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span className="mr-1">
                      {entry.weather.weather[0].main === 'Clear' ? '☀️' : 
                       entry.weather.weather[0].main === 'Clouds' ? '☁️' :
                       entry.weather.weather[0].main === 'Rain' ? '🌧️' : '🌈'}
                    </span>
                    <span>{Math.round(entry.weather.main.temp)}°C</span>
                    <span className="mx-1">•</span>
                    <span>{entry.weather.weather[0].description}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}