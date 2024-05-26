import React from "react";
import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Countries = ({ searchName, countries }) => {
  if (searchName === "") {
    return <div>Start typing something</div>;
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />;
  }
  return (
    <div>
      {countries.length <= 10 &&
        countries.map((country) => (
          <Country country={country} key={country.name.common} />
        ))}
    </div>
  );
};

export default Countries;
