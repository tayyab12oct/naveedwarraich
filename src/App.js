import "./App.css";
// import Slider from "react-slick";
import EnvantoImage from "./components/EnvantoImage";
import First_section from "./first_sectiion";

import CustomerCarosel from "./components/CutomerCarosel";
import StatsAndFact from "./components/StatsAndFact";
import Digital from "./components/DIGITAL AGENCY";

import TeamCarosel from "./components/TeamCarosel";
import Responsive_menubar from "./responsive_menubar";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Suffle from "./components/suffle";
function App() {
  return (
    <>
      {/* <Routes>
        <Route exact path="/" element={<First_section />} />
      </Routes>
      <div className="py-24">
      </div>
      <TeamCarosel />
      <Suffle />
      <div className="py-32"></div>
      <div className="py-24">
    </div> */}
      <StatsAndFact />
      <Digital />
      <StatsAndFact />
      <TeamCarosel />
      <CustomerCarosel />
      <EnvantoImage />
      <TeamCarosel />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
