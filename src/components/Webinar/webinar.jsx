import React from "react";
import WebinarCard from "../Webinar-Card/webinarCard";
import "./webinar.scss";

const Webinar = () => {
  const webinars = [
    {
      number: "07",
      about: "Knowledge Sessions",
    },
    {
      number: "10",
      about: "Industry Leader",
    },
    {
      number: "350",
      about: "Attendees",
    },
  ];
  return (
    <div className="webinars-container">
      <div className="webinar-text-container">
        <h1>What to Expect?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet augue luctus ipsum sagittis, ac mollis eros facilisis.
        </p>
      </div>
      <div className="webinar-cards-container">
        {webinars.map((webinar) => {
          return <WebinarCard webinar={webinar} key={webinar.number} />;
        })}
      </div>
    </div>
  );
};

export default Webinar;
