import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const fetchWeather = async () => {
    const weatherResponse = await axios.get(
      `http://localhost:5000/api/weather/current?city=${city}`
    );
    setWeather(weatherResponse.data);
    }

  return (
    <>
      <div className="app">
      <header className="app-header">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </header>
      <main>
        {weather && <WeatherCard weather={weather} />}
      </main>
    </div>
    </>
  )
}

export default App
