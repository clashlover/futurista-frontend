import React from "react";
import smallPicOne from "../../Assets/pexels-andres-ayrton-6578391.png";
import smallPicTwo from "../../Assets/pexels-brett-sayles-2881232.png";
import bigPic from "../../Assets/pexels-fauxels-3182834.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1>Overview Of Future Of Spend Management Virtual Summit</h1>
        <p>
          Faced with increasing economic uncertainty and the costs associated
          with the ever-increasing administrative burden, today's business
          leaders must look inside their businesses to accelerate profitability
          and growth. One way to increase your competitiveness is to implement
          best-in-class cost management software as part of your overall
          business process management strategy. It can play an important role in
          increasing productivity, reducing waste and unwanted costs, and
          creating value through digital transformation. It allows leaders to
          reduce risk with the visibility and reliability they need to spend
          more every day.
        </p>
      </div>
      <div className="about-image-container">
        <div className="container-big">
          <img src={bigPic} alt="big-pic" />
        </div>
        <div className="img-divide">
          <div className="container-small">
            <img src={smallPicOne} alt="small-pic-one" />
          </div>
          <div className="container-small">
            <img src={smallPicTwo} alt="small-pic-two" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
