import "./Hero.css";
import NewBurger from "./NewBurger";
import LiquidButton from "./LiquidButton";

const Hero = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg",
  ];

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${images[2]})` }}
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
