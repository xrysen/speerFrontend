import "./Pricing.css";
import NewBurger from "./NewBurger";
import Footer from "./Footer";
import SubOption from "./SubOption";
import Perk from "./Perk";
import { useEffect } from "react";

const Pricing = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-nav">
        <NewBurger
          circleBg="#1FE1E9"
          default="white"
          bgColour="black"
          liColour="black-li"
          landing = {props.landing}
        />
      </div>
      <div className="pricing-content">
        <h1>PRICING</h1>
        <p className="call-to-action">
          Test out our app today! Choose from three subscription Based payment
          models.
        </p>
      </div>
      <div className="pricing-options">
        <SubOption onClick = {props.onClick}
          option="BASIC"
          colour="#D34848"
          subOption="MONTHLY"
          cost="$9"
          option1="Very Good"
          option2="Amazing"
          option3="Perfect job"
          option4="Love this"
          option5="It's so good"
          option6="Features"
        />
        <SubOption onClick = {props.onClick}
          option="ADVANCED"
          colour="#FFB33F"
          subOption="YEARLY"
          cost="$99"
          option1="Very very good"
          option2="Even amazing"
          option3="Perfect job"
          option4="Love this more"
          option5="It's so so good"
          option6="More features"
        />
        <SubOption onClick = {props.onClick}
          option="PRO"
          colour="#1FE1E9"
          subOption="YEARLY"
          cost="$120"
          option1="Very very good"
          option2="Even more"
          option3="Perfect job"
          option4="Love this more"
          option5="It's so so good"
          option6="More features"
        />
      </div>
      <div className="pricing-perks-container">
        <div className="pricing-nav">
          <NewBurger circleBg="black" bgColour="#D34848" liColour="red-li" />
        </div>
        <h1 className="pricing-perks-header">PERKS</h1>
        <div className="pricing-perks-content">
          <Perk
            title="Subscription Payment Model"
            color="white"
            description="No commitment, cancel anytime. Never worry about forgetting a payment again!"
          />
          <Perk
            title="No Fee Cancelation Policy"
            color="white"
            description="No commitment, cancel anytime. Never worry about forgetting a payment again!"
          />
          <Perk
            title="Subscription Payment Model"
            color="white"
            description="No commitment, cancel anytime. Never worry about forgetting a payment again!"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
