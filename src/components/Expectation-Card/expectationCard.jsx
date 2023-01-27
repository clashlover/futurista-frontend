import React from "react";
import "./expectationCard.scss";

const ExpectationCard = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card-logo">
        <img src={card.image} alt={card.heading} />
      </div>
      <div className="card-text">
        <h2>{card.heading}</h2>
        <p>{card.paragraph}</p>
      </div>
    </div>
  );
};

export default ExpectationCard;
