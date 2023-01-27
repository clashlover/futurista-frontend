import React from "react";
import "./discussionCard.scss";

const DiscussionCard = ({ area }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%), url(${area.imageUrl})`,
      }}
      className="card"
    >
      <p className="area-name">{area.area}</p>
      <div className="card-header">
        <h3>{area.heading}</h3>
        <p>#FSM2023</p>
      </div>
    </div>
  );
};

export default DiscussionCard;
