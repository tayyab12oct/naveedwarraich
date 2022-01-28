import "./App.css";
// import Slider from "react-slick";
import EnvantoImage from "./components/EnvantoImage";
import First_section from "./first_sectiion";

import CustomerCarosel from "./components/CutomerCarosel";
import StatsAndFact from "./components/StatsAndFact";
import Digital from "./components/DIGITAL AGENCY";

import TeamCarosel from "./components/TeamCarosel";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Suffle from "./components/suffle";
import Portfolio from "./components/portfolio";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<First_section />} />
      </Routes>

      <Digital />
      <div className="w-full py-10">
        <StatsAndFact />
      </div>
      <TeamCarosel />
      <Suffle />
      <CustomerCarosel />
      <EnvantoImage />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
