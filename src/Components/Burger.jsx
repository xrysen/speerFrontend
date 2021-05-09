import "./Burger.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "icon-opened" : "icon"}>
      <FontAwesomeIcon
        className="icon-position"
        size="3x"
        icon={faBars}
        onClick={() => {open ? setOpen(false) : setOpen(true)}}
      />
      <span className="company">EXP|CON</span>
      {open ? 
        <ul className = "menu-items">
          <li>WHAT IS IT?</li>
          <li>PERKS</li>
          <li>PRICING</li>
        </ul>
        : ""}
    </div>
  );
};

export default Burger;
