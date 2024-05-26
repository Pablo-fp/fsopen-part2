import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import "./App.css";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountriesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const countriesFiltered = countriesData.filter((country) => {
    return country.name.common.toLowerCase().includes(searchName.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Country Information</h1>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <Countries searchName={searchName} countries={countriesFiltered} />
    </div>
  );
};

export default App;
