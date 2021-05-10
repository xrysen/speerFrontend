import "./LiquidButton.css";

const LiquidButton = (props) => {
  return (
    <div className = "liquid-button" onClick = {props.onClick}>
      {props.label}
    </div>
  )
}

export default LiquidButton;