import React from "react";
import axaPic from "../../Assets/axa.png";
import novartisPic from "../../Assets/novartis.png";
import tescoPic from "../../Assets/tesco.png";
import "./speakers.scss";

const Speakers = () => {
  return (
    <div className="speakers-container">
      <div className="speakers-text">
        <h1>Expected Speakers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim est,
          ornare id tempu
        </p>
      </div>
      <div className="speakers-image-container">
        <div className="sp-img">
          <img src={axaPic} alt="axaPic" />
        </div>
        <div className="sp-img">
          <img src={tescoPic} alt="tescoPic" />
        </div>
        <div className="sp-img">
          <img src={novartisPic} alt="novartisPic" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
