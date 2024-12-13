// JSX Code (React Component)
import React from 'react';
import './HiringPage2.css';

const HiringPage2 = () => {
  return (
    <div className="hiringPage2">
      <div className="contentHR2">
        <h1 className="mainTitle">WELCOME TO THE WORLD <br /> OF DESSERTS AND <br />DELICACIES!</h1>

        <img className="donut" src="donut.png" alt="donut"/>

        <span className="topRight">JOIN US TODAY</span>

        <h2 className="main-subtitle">We&apos;re here to serve delicious cakes <br /> in a friendly and <br /> welcoming atmosphere.</h2>

        <div className="flex-container">

          <div className="flex-item">FLEXIBLE WORK SCHEDULE</div>
          <div className="flex-item">HIGH PAY AND RETURNS</div>
          <div className="flex-item">ACKNOWLEDGEMENT <br /> & <br />RECOGNITION</div>
          <div className="flex-item">MAINTAIN HEALTHY WORK-LIFE <br /> BALANCE</div>
          <div className="flex-item">SUPPORTIVE TEAM <br />& <br /> INCENTIVES</div>
          <div className="flex-item">EXPOSURE TO VARIED PROJECTS</div>
        </div>
      </div>
    </div>
  );
};

export default HiringPage2;
