import React from "react";
import digitalPic from "../../Assets/digital_session.png";
import discussionPic from "../../Assets/discussion.png";
import networkPic from "../../Assets/network.png";
import virtualPic from "../../Assets/virtual.png";
import ExpectationCard from "../Expectation-Card/expectationCard";
import "./expectation.scss";

const Expectation = () => {
  const cards = [
    {
      image: digitalPic,
      heading: "Digital Sessions",
      paragraph: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      image: discussionPic,
      heading: "Digital Panel Discussions",
      paragraph: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      image: networkPic,
      heading: "Digital Network",
      paragraph: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      image: virtualPic,
      heading: "Virtual one to one meeting",
      paragraph: "Lorem ipsum dolor sit amet, consectetur.",
    },
  ];
  return (
    <div className="expectation-container">
      <div className="expectation-text-container">
        <h1>What to Expect?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet augue luctus ipsum sagittis, ac mollis eros facilisis.
        </p>
      </div>
      <div className="expectation-card-container">
        {cards.map((card) => {
          return <ExpectationCard card={card} key={card.heading} />;
        })}
      </div>
    </div>
  );
};

export default Expectation;
