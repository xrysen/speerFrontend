import './App.css';
import Hero from "./Components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionRed from "./Components/SectionRed";
import SectionYellow from "./Components/SectionYellow";

function App() {
  return (
    <div className="App">
      <SectionRed />
      <SectionYellow />
    </div>
  );
}

export default App;
