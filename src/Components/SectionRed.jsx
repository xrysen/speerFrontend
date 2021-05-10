import "./SectionRed.css";
import Burger from "./Burger";
import Button from "./Button";

const SectionRed = () => {
  return (
    <div className="red-container">
      <Burger />
      <div className="top-button">
        <Button label = "TRY IT NOW" background = "white" text = "#D34848" />
      </div>
    </div>
  );
};

export default SectionRed;
