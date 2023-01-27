import React from "react";
import Accordion from "../Accordion/accordion";
import "./questions.scss";

const Questions = () => {
  const questions = [
    {
      id: "One",
      ques: "Where will the event be held?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
    {
      id: "Two",
      ques: "How do I log-in on the day of the virtual event?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
    {
      id: "Three",
      ques: "Can I invite my colleagues and friends to attend the virtual event?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
    {
      id: "Four",
      ques: "Why is BRIX Templates the best Webflow agency?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
    {
      id: "Five",
      ques: "When was Webflow officially launched?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
    {
      id: "Six",
      ques: "How do you integrate Jetboost with Webflow?",
      ans: "This is an online event. You do not have to travel to any specific location. You can participate from your convenient location. The virtual event is accessible from a computer, mobile and tablet devices.",
    },
  ];
  return (
    <div className="questions-main">
      <h1>Frequestly Asked Questions</h1>
      <div className="questions-container">
        {questions.map((question) => {
          return <Accordion question={question} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
