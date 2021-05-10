import "./GetNow.css";
import NewBurger from "./NewBurger";
import LiquidButton from "./LiquidButton";

const GetNow = () => {
  return (
    <div className="get-now-container">
      <NewBurger liColour="yellow-li" />
      <div className="get-now-content-container">
        <div className="get-now-content">
          <h1 style = {{ color: "#D34848"}}>GET EXP|CON NOW</h1>
          <p style = {{ color: "white"}}>Purchase and download the app.</p>
        </div>
        <LiquidButton label = "TRY IT NOW" />
      </div>
    </div>
  );
};

export default GetNow;
