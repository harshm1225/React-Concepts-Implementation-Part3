import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import SearchFilterContainer from "./SearchFilterContainer/SearchFilterContainer.js";
import Cards from "./Cards/Cards";

const countriesData = require("./data.json");

const App = () => {
  const [query, setQuery] = React.useState("");
  const [region, setRegion] = React.useState("");

  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchFilterContainer setQuery={setQuery} setRegion={setRegion} />
        <Cards countriesData={countriesData} query={query} region={region} />
      </main>
    </React.Fragment>
  );
};

export default App;
