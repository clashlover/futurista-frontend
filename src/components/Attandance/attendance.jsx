import React from "react";
import "./attendance.scss";

const Attendance = () => {
  return (
    <div className="attendance-container">
      <div className="att-text-container">
        <p id="att-blue-text">Who Should Attend?</p>
        <h1>Job Titles</h1>
        <p>CXO, VP, Director, Head, Manager & Specialist of -</p>
      </div>
      <div className="att-card-container">
        <div>
          <ul className="att-card">
            <li>Spend Management</li>
            <li>Expense Management</li>
            <li>Expense Management Technology</li>
            <li>Strategic Sourcing and Expense Management</li>
            <li>Digital Process Transformation and Expense Management</li>
            <li>Supply Chain Management</li>
            <li>Cost Management</li>
          </ul>
        </div>
        <div>
          <ul className="att-card">
            <li>Procurement & Supply Chain</li>
            <li>Expense & Vendor Management</li>
            <li>Expense Management & Revenue Optimization</li>
            <li>Expense Analytics and Finance Operations</li>
            <li>Enterprise Identity Management</li>
            <li>Distribution Finance & Enterprise Expense Management</li>
            <li>Expense Reduction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
