import React from "react";
import "./navItems.scss";

const NavItems = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#events">
          Our Events
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#webinars">
          Our Webinars
        </a>
      </li>
    </ul>
  );
};

export default NavItems;
