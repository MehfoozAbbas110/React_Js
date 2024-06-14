import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";

function Temperature() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: `${location}`,
        format: "json",
        u: "c",
      },
      headers: {
        'x-rapidapi-key': '6ff49e6ed9msh786c6f958896319p1517b0jsn0d2806750f3e',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Error fetching weather data. Please try again later.");
      setWeather(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <>
    <div className="box">
      <div className="inputfield">
      <h1>Today's Weather</h1><br /><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          required
        />< br />< br />
        <button type="submit">Submit</button>
        {/* <div className="button">Submit</div> */}
      </form>
      </div><br />
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2> {weather.location.city} | {weather.location.country}</h2>
          <p> Temperature: {weather.current_observation.condition.temperature}°C</p>
          <p>{weather.current_observation.condition.text}</p>
          <p>Sunrise : {weather.current_observation.astronomy.sunrise} | Sunset : {weather.current_observation.astronomy.sunset}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Temperature;