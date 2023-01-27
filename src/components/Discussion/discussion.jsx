import React from "react";
import imageOne from "../../Assets/image.png";
import imageTwo from "../../Assets/image2.png";
import imageThree from "../../Assets/image3.png";
import DiscussionCard from "../Discussion-Card/discussionCard";
import "./discussion.scss";

const Discussion = () => {
  const areas = [
    {
      id: 1,
      area: "Austin",
      heading: "Future of Financing",
      imageUrl: imageOne,
    },
    {
      id: 2,
      area: "San Francisco",
      heading: "Future of Cloud Security",
      imageUrl: imageTwo,
    },
    {
      id: 3,
      area: "Austin",
      heading: "Future of Data Science",
      imageUrl: imageThree,
    },
  ];
  return (
    <div className="discussion-container">
      <div className="discussion-text-container">
        <h1>Discussion Points</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet augue luctus ipsum sagittis, ac mollis eros facilisis.
        </p>
      </div>
      <div className="discussion-cards-container">
        {areas.map((area) => {
          return <DiscussionCard area={area} key={area.id} />;
        })}
      </div>
    </div>
  );
};

export default Discussion;
