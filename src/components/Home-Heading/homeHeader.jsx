import React from "react";
import "./homeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="header">
      <h1>Future of Spend Management Virtual Summit</h1>
      <p>#FSM2023</p>
      <p>Date: 24th February, 2023</p>
      <p>Time - 1000 hrs ET/1500 hrs GMT</p>
      <div className="home-button-container">
        <button type="button" className="btn btn-primary btn-header-blue">
          REVERSE YOUR PAS NOW
        </button>
        <button type="button" className="btn btn-light">
          INTERESTED INSPONSORSHIP
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
