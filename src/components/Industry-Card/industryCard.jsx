import React from "react";
import "./industryCard.scss";

const IndustryCard = ({ card }) => {
  return (
    <div className="industry-card">
      <div
        style={{
          background: `${card.background}`,
          boxShadow: `${card.shadow}`,
        }}
        className="ind-card-image"
      ></div>
      <div className="ind-card-text">
        <p>{card.content}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
