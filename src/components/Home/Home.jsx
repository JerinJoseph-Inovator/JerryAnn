import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* <h2>Welcome To</h2> */}
      <span>
        <img className="logo" src="Logo_crop.gif" alt="Logo" />
      </span>

      <div className="home-content">
        <div className="HomeLeft">
          <button className="button bake-button">Explore Recipes</button>
          <button 
            className="button explore-button" 
            onClick={() => navigate("/hiring")}
          >
            Hiring Page
          </button>
        </div>

        <div className="HomeRight">
          <div className="steam"></div>
          <img className="cake" src="Cake_transparent.png" alt="Cake" />
          <img className="bakeryleft" src="bakeryItems_BG.png" alt="Bakery Items" />
          <img className="bakeryright" src="BakeryRight.png" alt="Bakery Items" />
        </div>
      </div>
    </div>
  );
};

export default Home;
