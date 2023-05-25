import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Link to="../CardDetail.js" state={{ selectedCountry: props }}>
      <div className="card">
        <div className="image-container">
          <img src={props.flag} alt="" />
        </div>
        <p>{props.name}</p>
        <div className="country-details">
          <p>
            <span>Population: </span>
            {numberWithCommas(props.population)}
          </p>
          <p>
            <span>Region: </span>
            {props.region}
          </p>
          <p>
            <span>Capital: </span>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
