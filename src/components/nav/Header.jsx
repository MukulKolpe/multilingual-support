import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n, t } = useTranslation(["common"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage("en");
    }
  }, [i18n]);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        {t("Multi Language Support")}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="fr">French</option>
            </select>
          </li>
          <li className="nav-item ml-2">
            <Link className="nav-link" to="/profile">
              {t("profile")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
