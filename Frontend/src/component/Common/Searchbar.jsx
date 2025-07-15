import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ Import this
import "../../css/searchbar.css";

const Searchbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [selectedCurrency, setSelectedCurrency] = useState("Currency");

  const cartSum = useSelector((state) => state.cartData.cartSum);

  return (
    <>
      <div className="container-fluid p-1 border-bottom">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-start">
            {/* Language Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedLanguage}
              </button>
              <ul className="dropdown-menu">
                {["English", "French", "Nepali"].map((lang) => (
                  <li key={lang}>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Currency Dropdown */}
            <div className="dropdown ms-2">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCurrency}
              </button>
              <ul className="dropdown-menu">
                {["Npr", "Usd", "Aud"].map((cur) => (
                  <li key={cur}>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedCurrency(cur)}
                    >
                      {cur}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control rounded-start"
                placeholder="Search..."
              />
              <button className="btn btn-dark" type="button" id="search-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 
        1.398h-.001c.03.04.062.078.098.115l3.85 
        3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 
        1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 
        1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <Link to="#" className="text-dark position-relative me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-cart-dash hover-scale"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>

              {/* Cart Count Badge (dynamic) */}
              {cartSum > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
                  {cartSum}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
