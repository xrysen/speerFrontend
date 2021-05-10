import "./Button.css";
import { useState } from "react";

const Button = (props) => {
  const [background, setBackground] = useState(props.background);
  const [textColour, setTextColour] = useState(props.text);
  return (
    <div
      className="button"
      style={{ background: background, color: textColour }}
      onMouseEnter={() => { setBackground("linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)"); setTextColour("white");}}
      onMouseLeave={() => { setBackground(props.background); setTextColour(props.text)}}
      onClick = {props.onClick}
    >
      {props.label}
    </div>
  );
};

export default Button;
