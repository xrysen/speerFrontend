import "./SubOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const SubOption = (props) => {
  return (
    <div className="subOption-container">
      <h1 style={{ color: props.colour }}>{props.option}</h1>
      <div className="option-divider" style={{ color: props.colour }}></div>
      <h1 style={{ color: props.colour }}>{props.subOption}</h1>
      <div className="option-cost" style={{ color: props.colour }}>
        {props.cost}
      </div>
      <ul className="music-list">
        <li>
          <FontAwesomeIcon icon={faMusic} size="1x" />
          <span className="music-list-option">{props.option1}</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faMusic} />
          <span className="music-list-option">{props.option2}</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faMusic} />
          <span className="music-list-option">{props.option3}</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faMusic} />
          <span className="music-list-option">{props.option4}</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faMusic} />
          <span className="music-list-option">{props.option5}</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faMusic} />
          <span className="music-list-option">{props.option6}</span>
        </li>
      </ul>
      <div className="cta-button">
        <Button background={props.colour} label="SELECT" />
      </div>
    </div>
  );
};

export default SubOption;
