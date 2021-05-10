import "./Payment.css";
import Footer from "./Footer";
import NewBurger from "./NewBurger";

const Payment = (props) => {
  return (
    <div className="payment-container">
      <div className="payment-top-nav">
        <NewBurger default = "black" bgColour = "white" liColour="yellow-li" />
      </div>
      <div className="payment-content">
        <h1>PAYMENT</h1>
        <form>
          <div className="select-plan">
            1. Select your plan
            <br />
            <input
              className="radio-red"
              type="radio"
              id="basic"
              name="payment-option"
            />
            <label
              className="payment-radio-label"
              style={{ color: "#D34848" }}
              for="basic"
            >
              BASIC
            </label>
            <input type="radio" id="advanced" name="payment-option" />
            <label
              className="payment-radio-label"
              style={{ color: "#FFB33F" }}
              for="advanced"
            >
              ADVANCED
            </label>
            <input type="radio" id="pro" name="payment-option" />
            <label
              className="payment-radio-label"
              style={{ color: "#1FE1E9" }}
              for="pro"
            >
              PRO
            </label>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
