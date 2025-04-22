import { useEffect, useState } from 'react';
import { moods } from '../constants/moods';

export default function CalendarView() {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const getMoodEmoji = (dateStr) => {
    const entry = entries.find(entry => entry.date.includes(dateStr));
    if (!entry) return null;
    const mood = moods.find(m => m.id === entry.mood);
    return mood ? mood.emoji : null;
  };

  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-14"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const moodEmoji = getMoodEmoji(dateStr);
      const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
      const hasEntry = moodEmoji !== null;

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(dateStr)}
          className={`h-14 flex flex-col items-center justify-center p-1 rounded-lg relative
                    ${isToday ? 'ring-2 ring-indigo-500' : ''}
                    ${selectedDate === dateStr ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
        >
          <span className={`text-sm ${isToday ? 'font-bold text-indigo-600' : 'text-gray-700'}`}>
            {day}
          </span>
          {hasEntry && (
            <span className="text-xl absolute bottom-1">{moodEmoji}</span>
          )}
        </button>
      );
    }

    return days;
  };

  const getSelectedEntry = () => {
    if (!selectedDate) return null;
    return entries.find(entry => entry.date.includes(selectedDate));
  };

  const selectedEntry = getSelectedEntry();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </h2>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-xs font-medium py-2 text-gray-500">{day}</div>
        ))}
        {renderDays()}
      </div>

      {selectedEntry && (
        <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-800">
              {new Date(selectedEntry.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'short', 
                day: 'numeric' 
              })}
            </h3>
            <span className="text-2xl">
              {moods.find(m => m.id === selectedEntry.mood)?.emoji}
            </span>
          </div>
          <p className="text-gray-700">{selectedEntry.note}</p>
          {selectedEntry.weather && (
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span className="mr-1">
                {selectedEntry.weather.weather[0].main === 'Clear' ? '☀️' : 
                 selectedEntry.weather.weather[0].main === 'Clouds' ? '☁️' :
                 selectedEntry.weather.weather[0].main === 'Rain' ? '🌧️' : '🌈'}
              </span>
              <span>{Math.round(selectedEntry.weather.main.temp)}°C</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}