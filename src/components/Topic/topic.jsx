import React from "react";
import expenseOne from "../../Assets/expense.svg";
import expenseTwo from "../../Assets/expense2.svg";
import price from "../../Assets/price.svg";
import reporting from "../../Assets/reporting.svg";
import spend from "../../Assets/spend.svg";
import travel from "../../Assets/travel.svg";
import TopicCard from "../Topic-Card/topicCard";
import "./topic.scss";

const Topic = () => {
  const topics = [
    {
      id: 1,
      logo: spend,
      heading: "Spend Analytics",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)",
      shadow: "0px 10px 22px -2px rgba(109, 171, 255, 0.36)",
    },
    {
      id: 2,
      logo: expenseOne,
      heading: "Expense Categorization",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)",
      shadow: "0px 8px 22px -2px rgba(248, 87, 94, 0.3)",
    },
    {
      id: 3,
      logo: travel,
      heading: "Travel Automation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px -2px rgba(250, 186, 84, 0.3)",
    },
    {
      id: 4,
      logo: price,
      heading: "Price Intelligence",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)",
      shadow: "0px 10px 22px -2px rgba(109, 171, 255, 0.36)",
    },
    {
      id: 5,
      logo: reporting,
      heading: "Real Time Reporting",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)",
      shadow: "0px 8px 22px -2px rgba(248, 87, 94, 0.3)",
    },
    {
      id: 6,
      logo: expenseTwo,
      heading: "Expense Management",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet augue",
      background: "linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px -2px rgba(250, 186, 84, 0.3)",
    },
  ];
  return (
    <div className="topic-container">
      <div className="topic-text-container">
        <h1>Topic We Cover</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet augue luctus ipsum sagittis, ac mollis eros facilisis.
        </p>
      </div>
      <div className="topic-cards-container">
        {topics.map((topic) => {
          return <TopicCard topic={topic} />;
        })}
      </div>
    </div>
  );
};

export default Topic;
