import React from "react";
import "./Hiring.css";
import HiringPage1 from "../Hiring/Pages/HiringPage1";
import HiringPage2 from "../Hiring/Pages/HiringPage2";
import HiringPage3 from "../Hiring/Pages/HiringPage3";


const HiringPageContainer = () => {
  return (
    <div className="hiring-page-container">
      <div className="section">
        <HiringPage1 />
      </div>
      <div className="section">
        <HiringPage2 />
      </div>
      <div className="section">
        <HiringPage3 />
      </div>
    </div>
  );
};

export default HiringPageContainer;
