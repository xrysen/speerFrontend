import "./Burger2.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Burger2 = (props) => {

  return (
    <div className = "icon">
      <FontAwesomeIcon
       size = "3x"
       icon={faBars}
       />
    </div>
  )
}

export default Burger2;