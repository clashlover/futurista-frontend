import React from "react";
import Logo from "../Logo/logo";
import NavItems from "../NavItems/navItems";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-container navbar-dark">
      <a className="navbar-brand" href="#home">
        <Logo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavItems />
        <button type="button" className="btn btn-primary btn-contact">
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
