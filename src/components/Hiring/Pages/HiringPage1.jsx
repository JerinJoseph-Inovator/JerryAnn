// HiringPage.jsx
import React from "react";
import "./HiringPage1.css";
import BackgroundImage from "/HiringPage1.png"; // Replace with your background image
import Logo from "/Logo_crop.gif"; // Replace with your logo image

const HiringPage = () => {
  return (
    <div
      className="hiring-container"
      // style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="contentP1">
        <img src={Logo} alt="Jerry & Ann Logo" className="hrlogo" />
        <p className="subtitle">About us</p>

        <div className="about-section">
          <p>
            A right opportunity at the right moment if availed has the immense
            potential to change the whole life for good. At Jerry & Ann, we
            understand this and constantly work to connect talented bakers with
            the customers who love indulgent treats. We make it simple for
            bakers by providing them a room to showcase their creations and
            reach out to sweet tooth, by delivering them right at their
            doorstep. From cakes and pastries to chocolates and cupcakes, we
            are one step destination for sweetness.
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default HiringPage;
