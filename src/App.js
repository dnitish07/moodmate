import { useState } from 'react';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import NoteInput from './components/NoteInput';
import WeatherDisplay from './components/WeatherDisplay';
import CalendarView from './components/CalendarView';
import AllNotesView from './components/AllNotesView';
import SaveButton from './components/SaveButton';

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  const [note, setNote] = useState('');
  const [weather, setWeather] = useState(null);

  return (
    <div className="min-h-screen p-4 md:p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Mood input */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <Header />
            <WeatherDisplay onWeatherLoaded={setWeather} />
            <MoodSelector onSelect={setCurrentMood} />
            <NoteInput value={note} onChange={setNote} />
            <SaveButton mood={currentMood} note={note} weather={weather} />
          </div>
          
          <div className="card p-6">
            <AllNotesView />
          </div>
        </div>

        {/* Right column - Calendar */}
        <div className="card p-6">
          <CalendarView />
        </div>
      </div>
    </div>
  );
}
export default App;