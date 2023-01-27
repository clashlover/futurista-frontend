import React, { useState } from "react";
import "./accordion.scss";

const Accordion = ({ question }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className="accordion">
      <div
        className={isActive ? "accordion-title active" : "accordion-title"}
        onClick={() => setActive(!isActive)}
      >
        <div>{question.ques}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{question.ans}</div>}
    </div>
  );
};

export default Accordion;
