import "./App.css";
import Hero from "./Components/Hero";
import SectionRed from "./Components/SectionRed";
import SectionYellow from "./Components/SectionYellow";
import Perks from "./Components/Perks";
import Reviews from "./Components/Reviews";
import GetNow from "./Components/GetNow";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
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
            <SectionRed />
            <SectionYellow />
            <Perks />
            <Reviews />
            <GetNow />
            <Footer />
          </>
        )}
        {mode === "Payment" && (
          <Payment />
        )}
      </AnimateOnChange>

    </div>
  );
}

export default App;
