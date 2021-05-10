import "./SectionYellow.css";
import TopNav from "./TopNav";

const SectionYellow = (props) => {
  return (
    <div className="yellow-container">
      <TopNav bgColour = "#FFB33F" liColour="yellow-li" onClick = {props.onClick} />
      <div className = "yellow-container-bg">

      </div>
    </div>
  );
};

export default SectionYellow;
