import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${query}`)
        .then((response) => {
          setCountries(response.data);
          setSelectedCountry(null);
          setError(null);
        })
        .catch((error) => {
          setCountries([]);
          setSelectedCountry(null);
          setError("Error fetching data");
        });
    } else {
      setCountries([]);
      setSelectedCountry(null);
      setError(null);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const renderCountryList = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    return (
      <ul>
        {countries.map((country) => (
          <li
            key={country.name.common}
            onClick={() => handleCountryClick(country)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    );
  };

  const renderCountryDetails = () => {
    if (!selectedCountry) return null;

    return (
      <div>
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Area: {selectedCountry.area} km²</p>
        <p>Languages:</p>
        <ul>
          {Object.values(selectedCountry.languages).map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <img
          src={selectedCountry.flags.png}
          alt={`Flag of ${selectedCountry.name.common}`}
          width="100"
        />
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Country Information</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a country..."
      />
      {error && <p>{error}</p>}
      {renderCountryList()}
      {renderCountryDetails()}
    </div>
  );
};

export default App;
