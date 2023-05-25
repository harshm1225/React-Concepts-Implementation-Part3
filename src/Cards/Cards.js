import * as React from "react";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = (props) => {
  const countries = props.countriesData;
  const filteredCountries = props.region
    ? countries.filter((country) => country.region === props.region)
    : countries;
  const filteredCountriesByName = filteredCountries.filter((country) =>
    country.name.toString().toLowerCase().includes(props.query)
  );

  return (
    <React.Fragment>
      <div className="cards-container">
        {filteredCountriesByName.map((country) => (
          <Card
            key={country.name}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
            name={country.name}
            nativeName={country.nativeName}
            subRegion={country.subregion}
            topLevelDomain={country.topLevelDomain}
            currencies={country.currencies}
            languages={country.languages}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cards;
