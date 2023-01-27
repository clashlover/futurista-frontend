import React from "react";
import emburseLogo from "../../Assets/emburse.png";
import "./sponsors.scss";

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sp-text-container">
        <h1>Our Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim est,
          ornare id tempu
        </p>
      </div>
      <img src={emburseLogo} alt="emburseLogo" />
    </div>
  );
};

export default Sponsors;
