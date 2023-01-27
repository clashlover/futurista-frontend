import React from "react";
import IndustryCard from "../Industry-Card/industryCard";
import "./industries.scss";

const Industries = () => {
  const cards = [
    {
      background:
        "linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%), linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px -2px rgba(250, 186, 84, 0.3)",
      content: "Financial Services",
    },
    {
      background:
        "linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%), linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%), linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px -2px rgba(250, 186, 84, 0.3)",
      content: "Banking",
    },
    {
      background:
        "linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%), linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%), linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px rgba(250, 186, 84, 0.3)",
      content: "Insurance",
    },
    {
      background:
        "linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%), linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%), linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
      shadow: "0px 10px 22px -2px rgba(250, 186, 84, 0.3)",
      content: "Manufacturing",
    },
  ];

  return (
    <div className="industries-container">
      <div className="industries-text-container">
        <h1>Industries</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet augue luctus ipsum sagittis, ac mollis eros facilisis.
        </p>
      </div>
      <div className="industries-cards-container">
        {cards.map((card) => {
          return <IndustryCard card={card} />;
        })}
      </div>
    </div>
  );
};

export default Industries;
