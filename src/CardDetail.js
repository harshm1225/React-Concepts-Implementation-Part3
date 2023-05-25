import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import "./CardDetail.css";
import { Link } from "react-router-dom";

const CardDetail = () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const location = useLocation();
  const selectedCountry = location.state;
  console.log(selectedCountry);

  const languages = selectedCountry.selectedCountry.languages.map(
    (l) => l.name
  );

  return (
    <div>
      <Header />
      <div className="main-container">
        <Link to="/">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill="#111517"
                />
              </g>
            </svg>
            Back
          </button>
        </Link>
        <div className="card-flex-cont">
          <img src={selectedCountry.selectedCountry.flag} alt="" />
          <div className="country-data">
            <h1>{selectedCountry.selectedCountry.name}</h1>
            <div className="properties-container">
              <div className="properties-container-1">
                <ul>
                  <li>
                    <span>Native Name: </span>
                    {selectedCountry.selectedCountry.nativeName}
                  </li>
                  <li>
                    <span>Population: </span>
                    {numberWithCommas(
                      selectedCountry.selectedCountry.population
                    )}
                  </li>
                  <li>
                    <span>Region: </span>
                    {selectedCountry.selectedCountry.region}
                  </li>
                  <li>
                    <span>Sub Region: </span>
                    {selectedCountry.selectedCountry.subRegion}
                  </li>
                  <li>
                    <span>Capital:</span>
                    {selectedCountry.selectedCountry.capital}
                  </li>
                </ul>
              </div>
              <div className="properties-container-2">
                <ul>
                  <li>
                    <span>Top Level Domain: </span>
                    {selectedCountry.selectedCountry.topLevelDomain}
                  </li>

                  <li>
                    <span>Currencies: </span>
                    Euro
                  </li>
                  <li>
                    <span>Languages: </span>
                    {languages.join(", ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
