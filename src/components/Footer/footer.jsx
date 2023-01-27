import React from "react";
import foot1 from "../../Assets/foot1.png";
import foot2 from "../../Assets/foot2.png";
import foot3 from "../../Assets/foot3.png";
import foot4 from "../../Assets/foot4.png";
import foot5 from "../../Assets/foot5.png";
import foot6 from "../../Assets/foot6.png";
import Logo from "../Logo/logo";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-one">
        <Logo />
        <p className="footer-para">
          The 21st century has seen a complete change in the way life operates
          on this planet. We are at the cusp of the 4th Industrial Revolution
          that will be based on the code, data or information based social and
          economic system.
        </p>
        <form className="form-input">
          <input type="email" placeholder="Email Address" />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
      <div className="container-two">
        <h1 className="footer-header">Contact Us</h1>
        <p className="footer-para">
          Group Futurista OU. Harju maakond, Kuusalu Vald, Pudisoo Kula,
          Mannimae, 74626.
        </p>
        <p className="footer-para margin-0">Phone: +44 203 432 7761</p>
        <p className="footer-para margin-0">
          Email: jennifer@groupfuturista.com
        </p>
      </div>
      <div className="container-three">
        <h1 className="footer-header">Newsletter</h1>
        <div className="footer-card-container">
          <img className="footer-card" src={foot1} alt="foot-1" />
          <img className="footer-card" src={foot2} alt="foot-2" />
          <img className="footer-card" src={foot3} alt="foot-3" />
          <img className="footer-card" src={foot4} alt="foot-4" />
          <img className="footer-card" src={foot5} alt="foot-5" />
          <img className="footer-card" src={foot6} alt="foot-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
