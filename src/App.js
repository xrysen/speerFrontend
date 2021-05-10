import "./App.css";
import Hero from "./Components/Landing/Hero";
import SectionRed from "./Components/Landing/SectionRed";
import SectionYellow from "./Components/Landing/SectionYellow";
import Perks from "./Components/Landing/Perks";
import Reviews from "./Components/Landing/Reviews";
import GetNow from "./Components/Landing/GetNow";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment/Payment";
import Pricing from "./Components/Pricing/Pricing";
import { useState } from "react";
import { AnimateOnChange } from "react-animation";

function App() {
  const [mode, setMode] = useState("Landing");

  const changeView = (view) => {
    setMode(view);
  }

  return (
    <div className="App">
      <AnimateOnChange>
        {mode === "Landing" && (
          <>
            <Hero />
            <SectionRed onClick = {() => changeView("Pricing")} landing = {()=> changeView("Landing")} />
            <SectionYellow onClick = {() => changeView("Pricing")} />
            <Perks onClick = {() => changeView("Pricing")}/>
            <Reviews onClick = {() => changeView("Pricing")}/>
            <GetNow onClick = {() => changeView("Pricing")}/>
            <Footer />
          </>
        )}
        {mode === "Payment" && (
          <Payment />
        )}
        {mode === "Pricing" && (
          <Pricing onClick = {()=> changeView("Payment")} />
        )}
      </AnimateOnChange>

    </div>
  );
}

export default App;
