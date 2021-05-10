import "./Pricing.css";
import NewBurger from "./NewBurger";
import Footer from "./Footer";
import Button from "./Button";
import SubOption from "./SubOption";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-nav">
        <NewBurger
          circleBg="#1FE1E9"
          default="white"
          bgColour="black"
          liColour="black-li"
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
        <SubOption
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
        <SubOption
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
        <SubOption
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
      <Footer />
    </div>
  );
};

export default Pricing;
