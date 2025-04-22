import { useState, useEffect } from 'react';

const weatherEmojis = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Snow: '❄️',
  Thunderstorm: '⛈️',
  Drizzle: '🌦️',
};

export default function WeatherDisplay({ onWeatherLoaded }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=66d2c26c6e023155be8302cba7a96cae&units=metric`
            );
            const data = await response.json();
            setWeather(data);
            onWeatherLoaded(data);
          } catch (err) {
            setError("Couldn't fetch weather data");
          }
        },
        (err) => setError("Please enable location services")
      );
    } else {
      setError("Geolocation not supported");
    }
  }, [onWeatherLoaded]);

  return (
    <div className="text-center my-4 p-3 bg-gray-100 rounded-lg">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : weather ? (
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">
            {weatherEmojis[weather.weather[0].main] || '🌈'}
          </span>
          <span className="text-lg">
            {Math.round(weather.main.temp)}°C
          </span>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}