import "./Hero.css";
import NewBurger from "./NewBurger";
import LiquidButton from "./LiquidButton";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2017/03/27/15/13/man-2179313_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/10/12/15/09/concert-984237_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg",
  ];

  const [currImage, setCurimage] = useState(0);

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${images[currImage]})` }}
    >
      <div className="hero-nav">
        <NewBurger liColour="yellow-li" />
      </div>
      <div className="hero-header">
        <h1 style={{ fontSize: "60px" }}>INTERACTIVE CONCERT EXPERIENCE</h1>
        <p style={{ fontSize: "25px", marginBottom: "30px" }}>
          Experience your favourite artists like never 
          <br />before from the comfort of your own home.
        </p>
        <LiquidButton label="TRY IT NOW" />
      </div>
    </div>
  );
};

export default Hero;
