# MoodMate - Personal Mood Journal

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blueviolet)](https://tailwindcss.com/)
[![OpenWeatherAPI](https://img.shields.io/badge/OpenWeather_API-2.5-yellow)](https://openweathermap.org/api)

A modern React application for tracking daily moods with weather integration. Features mood logging, calendar visualization, and historical note review with responsive design.

## Key Features

- **Mood Tracking**: Log daily moods with 5 emoji options
- **Weather Integration**: Automatically fetches local weather data
- **Calendar View**: Visualize mood history with dot indicators
- **Note Journal**: Save and review daily notes with timestamps
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Local Storage**: Persists entries between sessions
- **Geolocation**: Automatic location detection for weather

## Technologies Used

- **React** (Functional Components & Hooks)
- **Tailwind CSS** (Utility-first styling)
- **OpenWeather API** (Weather data)
- **Browser Geolocation API** (Location services)
- **Date-fns** (Date formatting)
- **JavaScript ES6+** (Modern Syntax)
- **Git** (Version Control)

## Installation & Setup

1. **Clone Repository**
```bash
git clone https://github.com/your-username/moodmate-app.git
cd moodmate-app
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment**
```bash
cp .env.example .env
# Add your OpenWeather API key
```

4. **Start Development Server**
```bash
npm start
```

5. **Build for Production**
```bash
npm run build
```

## Core Components

```javascript
{
  moodEntry: {
    date: ISOString,    // Entry timestamp
    mood: number,       // Selected mood ID (1-5)
    note: string,       // User's journal note
    weather: object     // Weather data from API
  }
}
```

## API Integration

### OpenWeather API

**Endpoint:**  
`GET https://api.openweathermap.org/data/2.5/weather`

**Required Parameters:**

- `lat`: Latitude from geolocation  
- `lon`: Longitude from geolocation  
- `units`: metric (for Celsius)  
- `appid`: Your API key

## Key Components

### MoodSelector.js
- Displays 5 mood emoji options
- Visual feedback on selection
- Handles mood selection state

### CalendarView.js
- Monthly calendar layout
- Dot indicators for logged days
- Highlights current day

### AllNotesView.js
- Chronological note display
- Weather data visualization
- Responsive card layout

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── MoodSelector.js
│   ├── NoteInput.js
│   ├── WeatherDisplay.js
│   ├── CalendarView.js
│   ├── AllNotesView.js
│   └── SaveButton.js
├── constants/
│   └── moods.js
├── App.js
└── index.js
```

## Implementation Details

### Mood Tracking System
- 5 emoji options with visual feedback
- Dynamic background based on selected mood
- Form validation before submission

### Weather Integration
- Automatic geolocation detection
- Real-time weather data fetching
- Weather emoji visualization

### Data Persistence
- LocalStorage for mood entries
- Automatic data loading on startup
- Entries sorted by date

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Consistent spacing and typography

## Deployment

Deployed using Netlify:  
**Live Demo:** *Coming Soon*

## Future Enhancements

- Mood trend visualization
- Dark mode toggle
- PDF export functionality
- Multi-language support

## Acknowledgements

- OpenWeather for free weather API  
- Tailwind CSS for utility-first framework  
- React documentation for component patterns
