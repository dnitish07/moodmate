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
    <div className="min-h-screen bg-gray-50 p-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <Header />
        <WeatherDisplay onWeatherLoaded={setWeather} />
        <MoodSelector onSelect={setCurrentMood} />
        <NoteInput value={note} onChange={setNote} />
        <SaveButton mood={currentMood} note={note} weather={weather} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <CalendarView />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <AllNotesView />
        </div>
      </div>
    </div>
  );
}

export default App;