import { useTranslation } from "react-i18next";
import React from "react";

const Profile = () => {
  const { t } = useTranslation(["common", "profile"]);
  return (
    <div className="container mt-5 col-9 col-md-6">
      <h1 className="text-center">{t("common:profile")}</h1>
      <div className="form-group">
        <label htmlFor="">{t("profile:name")}</label>
        <input type="text" className="form-control" placeholder="Name..." />
      </div>
      <div className="form-group">
        <label htmlFor="">{t("profile:age")}</label>
        <input type="number" className="form-control" placeholder="Age..." />
      </div>
      <div className="form-group">
        <label htmlFor="">{t("profile:email")}</label>
        <input
          type="text"
          className="form-control"
          placeholder="name@gmail.com"
        />
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-dark">{t("common:submit")}</button>
      </div>
    </div>
  );
};

export default Profile;
