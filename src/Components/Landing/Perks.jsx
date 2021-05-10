import "./Perks.css";
import TopNav from "../TopNav";
import Perk from "./Perk";

const Perks = (props) => {
  return (
    <div className = "black-container">
      <TopNav liColour = "yellow-li" onClick = {props.onClick} />
      <h1 className = "perk-header">PERKS</h1>
      <div className = "perks-container">
        <Perk color = "#D34848" title = "Subscription Payment Model" description = "No commitment, cancel anytime. Never worry about forgetting a payment again!" />
        <Perk color = "#1FE1E9" title = "No Fee Cancelation Policy" description = "No commitment, cancel anytime. Never worry about forgetting a payment again!"/>
        <Perk color = "#FFB33F" title = "Subscription Payment Model" description = "No commitment, cancel anytime. Never worry about forgetting a payment again!" />
      </div>
    </div>
  )
}

export default Perks;