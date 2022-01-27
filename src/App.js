import "./App.css";
import Slider from "react-slick";
import Envanto_image from "./envanto_image";
import Last_section from "./last_section/inde";
import First_section from "./first_sectiion";

import CustomerCarosel from "./components/CutomerCarosel";
import StatsAndFact from "./components/StatsAndFact";
import TeamCarosel from "./components/TeamCarosel";
import Responsive_menubar from "./responsive_menubar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<First_section />} />
        <Route path="/StatsAndFact" element={<StatsAndFact />} />
        <Route path="/TeamCarosel" element={<TeamCarosel />} />
        <Route path="/CustomerCarosel" element={<CustomerCarosel />} />
        <Route path="/Envanto_image" element={<Envanto_image />} />
        <Route path="/lastsectiom" element={<Last_section />} />
        <Route path="/side_bar" element={<Responsive_menubar />} />
      </Routes>
      <StatsAndFact />
      <TeamCarosel />
      <CustomerCarosel />
      <Envanto_image />
      <Last_section />
    </>
  );
}

export default App;
