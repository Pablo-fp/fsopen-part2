import axios from "axios";
import React, { useState, useEffect } from "react";

const api = import.meta.env.VITE_API_KEY;
console.log(api);

const CountryInfo = ({ country }) => {
  const imgAltText = `Flag of ${country.name.common}`;

  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(0);
  console.log(temperature);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
      // change to F --> C
      setTemperature((response.data.main.temp - 273.15).toFixed(2));
    });
  }, [url]);

  return (
    <div>
      <h3>{country.name.common}</h3>
      <div>capital: {country.capital}</div>
      <div>area: {country.area} km2</div>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={imgAltText} width={200} />
      <div>
        <h3>Weather in {country.capital}</h3>
        {weather.weather && (
          <div>
            <div>temperature: {temperature}</div>
            <div>wind: {weather.wind.speed} m/s</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
