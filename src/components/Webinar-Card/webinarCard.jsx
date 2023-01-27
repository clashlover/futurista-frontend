import React from "react";
import "./webinarCard.scss";

const WebinarCard = ({ webinar }) => {
  return (
    <div className="webinar-card-container">
      <h1>{webinar.number}+</h1>
      <p>{webinar.about}</p>
    </div>
  );
};

export default WebinarCard;
