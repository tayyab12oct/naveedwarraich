import "./App.css";
import Slider from "react-slick";
import Envanto_image from "./envanto_image";
import Last_section from "./last_section/inde";

import CustomerCarosel from "./components/CutomerCarosel";
import StatsAndFact from "./components/StatsAndFact";
import TeamCarosel from "./components/TeamCarosel";
function App() {
  return (
    <>
      <StatsAndFact />
      <TeamCarosel />

      <CustomerCarosel />
      <Last_section />
    </>
  );
}

export default App;
