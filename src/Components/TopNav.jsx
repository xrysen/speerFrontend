import NewBurger from "./NewBurger";
import Button from "./Button";
import "./TopNav.css";

const TopNav = (props) => {
  return (
    <div className = "top-nav">
      <NewBurger bgColour = {props.bgColour} liColour = {props.liColour} landing = {props.landing} />
      <span style = {{paddingTop: "60px", paddingRight: "50px"}}> <Button label="TRY IT NOW" background="white" text="#D34848" onClick = {props.onClick} /></span>
    </div>
  )
}

export default TopNav;