import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NewBurger.css";
import { useState } from "react";

const NewBurger = (props) => {
  const [open, setOpen] = useState(false);

  const burgerIconClose = {
    position: "relative",
    right: "80px",
    bottom: "80px",
    backgroundColor: props.bgColour,
    color: "white",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    transition: "all 0.2s ease-in-out",
  };

  const burgerIconOpen = {
    position: "relative",
    right: "80px",
    bottom: "80px",
    zIndex: 0,
    color: props.bgColour,
    backgroundColor: "black",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    overflow: "hidden",
    transition: "all 0.2s ease-in-out",
  };

  const [currStyle, setStyle] = useState(burgerIconClose);

  const handleBurgerClick = () => {
    if (open) {
      setOpen(false);
      setStyle(burgerIconClose);
    } else {
      setOpen(true);
      setStyle(burgerIconOpen);
    }
  };

  return (
    <div style={currStyle}>
      <div className="burger-icon">
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          onClick={() => handleBurgerClick()}
        />
      </div>
      <div className="company">EXP|CON</div>
      {open ? (
        <ul className="burger-menu">
          <li className = {props.liColour}>WHAT IS IT?</li>
          <li className = {props.liColour}>PERKS</li>
          <li className = {props.liColour}>PRICING</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewBurger;
