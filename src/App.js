import './App.css';
import Hero from "./Components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionRed from "./Components/SectionRed";
import SectionYellow from "./Components/SectionYellow";
import Perks from "./Components/Perks";
import Reviews from "./Components/Reviews";
import GetNow from "./Components/GetNow";
import Footer from "./Components/Footer";

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

export default App;
