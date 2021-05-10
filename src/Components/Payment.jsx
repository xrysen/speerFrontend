import "./Payment.css";
import Footer from "./Footer";
import NewBurger from "./NewBurger";
import CountrySelect from "./CountrySelect";
import MonthSelector from "./MonthSelector";
import LiquidButton from "./LiquidButton";

const Payment = (props) => {
  return (
    <div className="payment-container">
      <div className="payment-top-nav">
        <NewBurger default="black" bgColour="#D34848" liColour="red-li" />
      </div>
      <div className="payment-content">
        <h1 style={{ paddingBottom: "50px" }}>PAYMENT</h1>
        <form>
          <div className="select-plan">
            <h2 style={{ paddingBottom: "20px" }}>1. Select your plan</h2>

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
          <div className="personal-info">
            <div className="billing-info">
              <h2 className="billing-header">2. Billing Information</h2>
              <label className="label-header">FULL NAME</label>
              <br />
              <input style={{ width: "100%", height: "30px" }} type="text" />
              <br />
              <label className="label-header">BILLING ADDRESS</label>
              <br />
              <input style={{ width: "100%", height: "30px" }} type="text" />
              <br />
              <div className="payment-city">
                <label className="label-header" for="city">
                  CITY
                </label>
                <label
                  className="label-header"
                  style={{ paddingRight: "48px" }}
                >
                  POSTAL CODE
                </label>
              </div>
              <div className="payment-city-input">
                <input style={{ width: "40%" }} />
                <input style={{ width: "40%" }} />
              </div>
              <label className="label-header">COUNTRY</label>
              <br />
              <CountrySelect />
            </div>
            <div className="card-info">
              <h2 className="billing-header">3. Credit Card Information</h2>
              <label className="label-header">CARDHOLDER'S NAME</label>
              <br />
              <input style={{ width: "100%", height: "30px" }} type="text" />
              <br />
              <label className="label-header">CARD NUMBER</label>
              <br />
              <input style={{ width: "100%" }} type="tel" />
              <div className="payment-city">
                <label className="label-header">EXPIRY MONTH</label>
                <label className="label-header">EXPIRY YEAR</label>
              </div>
              <div className="payment-city-input">
                <MonthSelector />
                <input type="number" min="1900" max="2099" step="1" />
              </div>
              <label className="label-header">CCV</label>
              <br />
              <input type="number" className="input-full-width" />
            </div>
          </div>

          <div className="acknowledgement">
            <p>
              By continuing, I acknowledge that I've read and agree to the Terms
              of Service & Privacy Policy.
            </p>
            <br />
            <LiquidButton label="DOWNLOAD" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
