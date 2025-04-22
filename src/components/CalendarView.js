import { useEffect, useState } from 'react';

export default function CalendarView() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const renderDays = () => {
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEntry = entries.find(entry => entry.date.includes(dateStr));
      
      days.push(
        <div 
          key={day} 
          className="h-10 flex flex-col items-center justify-start"
        >
          <span className={`text-sm ${day === today.getDate() ? 'font-bold' : ''}`}>
            {day}
          </span>
          {dayEntry && (
            <span className="text-xs">●</span>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </h2>
      <div className="grid grid-cols-7 gap-1 text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
          <div key={day} className="text-xs font-semibold py-1">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}