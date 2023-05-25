import React, { useEffect, useRef } from "react";
import "./SearchFilterContainer.css";

const SearchFilterContainer = (props) => {
  const filterRef = useRef(null);
  const filterOptionsContainerRef = useRef(null);
  useEffect(() => {
    const handleFilterRefClick = (event) => {
      filterOptionsContainerRef.current.classList.toggle("hidden");
    };
    if (filterRef.current) {
      filterRef.current.addEventListener("click", handleFilterRefClick);
    }

    return () => {
      if (filterRef.current) {
        filterRef.current.removeEventListener("click", handleFilterRefClick);
      }
    };
  }, []);
  const onClickHandler = (event) => {
    const country = event.target.innerText;
    props.setRegion(country);
  };
  return (
    <React.Fragment>
      <div className="search-filter-container">
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="search">
              <path
                id="Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                fill="#848484"
              />
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => {
              props.setQuery(event.target.value);
            }}
          />
        </div>

        <div className="filter-container">
          <span>Filter by Region</span>

          <svg
            ref={filterRef}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        className="filter-options-container hidden"
        ref={filterOptionsContainerRef}
        onClick={onClickHandler}
      >
        <button>
          <li>Africa</li>
        </button>

        <button>
          <li>America</li>
        </button>
        <button>
          <li>Asia</li>
        </button>
        <button>
          <li>Europe</li>
        </button>
        <button>
          <li>Oceania</li>
        </button>
      </div>
    </React.Fragment>
  );
};
export default SearchFilterContainer;
