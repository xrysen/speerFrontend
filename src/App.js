import './App.css';
import Hero from "./Components/Hero";
import SectionRed from "./Components/SectionRed";
import SectionYellow from "./Components/SectionYellow";
import Perks from "./Components/Perks";
import Reviews from "./Components/Reviews";
import GetNow from "./Components/GetNow";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      <SectionRed />
      <SectionYellow />
      <Perks />
      <Reviews />
      <GetNow />
      <Footer />
    </div>
  );
}

function Payment() {
  return <h2>Payment</h2>;
}

export default App;
