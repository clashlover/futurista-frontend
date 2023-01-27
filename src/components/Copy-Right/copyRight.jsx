import React from "react";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import linkedIn from "../../Assets/linkedin.png";
import "./copyRight.scss";

const CopyRight = () => {
  return (
    <div className="copy-right-container">
      <p>Copyright @ 2020. All rights reserved.</p>
      <div className="social">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedIn} alt="linkedin" />
      </div>
    </div>
  );
};

export default CopyRight;
