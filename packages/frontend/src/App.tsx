import React, { useEffect, useState } from 'react';

import { Weather } from './components';
import { WeatherResponse } from './types';

function App() {
  const [weather, setWeather] = useState<WeatherResponse['weather'] | null>(null);
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch('http://localhost:3001/weather?city=Warsaw');
      const data = await response.json();
      setWeather(data.weather);
      setCity(data.city);
    };

    fetchWeather();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      {weather && (
        <Weather
          temperature={weather.temperature}
          description={weather.description}
          icon={weather.icon}
        />
      )}
      {city && <h1 className="text-4xl font-bold">{city}</h1>}
    </main>
  );
}

export default App;
