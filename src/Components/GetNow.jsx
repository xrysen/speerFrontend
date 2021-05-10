import "./GetNow.css";
import NewBurger from "./NewBurger";
import LiquidButton from "./LiquidButton";

const GetNow = (props) => {
  return (
    <div className="get-now-container">
      <div className="get-now-nav">
        <NewBurger liColour="yellow-li"  />
      </div>
      <div className="get-now-content-container">
        <div className="get-now-content">
          <h1 style={{ color: "#D34848" }}>GET EXP|CON NOW</h1>
          <p style={{ color: "white", fontSize: "30px" }}>
            Purchase and download the app.
          </p>
        </div>
        <LiquidButton label="TRY IT NOW" onClick = {props.onClick} />
      </div>
    </div>
  );
};

export default GetNow;
