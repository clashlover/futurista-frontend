import React from "react";
import "./topicCard.scss";

const TopicCard = ({ topic }) => {
  return (
    <div className="topic-card">
      <div
        style={{
          background: `${topic.background}`,
          boxShadow: `${topic.shadow}`,
        }}
        className="topic-image"
      >
        <img src={topic.logo} alt={topic.name} />
      </div>
      <div className="topic-text">
        <h3>{topic.heading}</h3>
        <p>{topic.content}</p>
      </div>
    </div>
  );
};

export default TopicCard;
