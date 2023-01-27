import React from "react";
import companyLogo from "../../Assets/company-logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={companyLogo} alt="company logo" />
    </div>
  );
};

export default Logo;
