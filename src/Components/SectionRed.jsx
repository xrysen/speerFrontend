import "./SectionRed.css";
import speakers from "../assets/speakers.png";
import Burger from "./Burger";
import Button from "./Button";

const SectionRed = () => {
  return (
    <div className="red-container">
      <Burger />
      <div className="top-button">
        <Button label = "TRY IT NOW" background = "white" text = "#D34848" />
      </div>
      <div className = "content-container">
        <div className = "info">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <Button label = "SEE DEMO" background = "white" text = "#D34848" />
        </div>
        <div className = "speakers">
          <img src={speakers} alt="speakers" />
        </div>
      </div>
    </div>
  );
};

export default SectionRed;
