import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./NewBurger.css";

const NewBurger = (props) => {
  return (
    <div className = "burger-icon">
      <FontAwesomeIcon icon = {faBars} size="3x" />
    </div>
  )
}

export default NewBurger;