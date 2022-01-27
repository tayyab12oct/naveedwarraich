import "./App.css";
// import Slider from "react-slick";
import EnvantoImage from "./components/EnvantoImage";
import First_section from "./first_sectiion";

import CustomerCarosel from "./components/CutomerCarosel";
import StatsAndFact from "./components/StatsAndFact";
import TeamCarosel from "./components/TeamCarosel";
import Responsive_menubar from "./responsive_menubar";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<First_section />} />
        <Route path="/StatsAndFact" element={<StatsAndFact />} />
        <Route path="/TeamCarosel" element={<TeamCarosel />} />
        <Route path="/CustomerCarosel" element={<CustomerCarosel />} />
        <Route path="/side_bar" element={<Responsive_menubar />} />
      </Routes>
      <StatsAndFact />
      <TeamCarosel />
      <div className="py-32"></div>
      <CustomerCarosel />
      <EnvantoImage />
      <div className="py-24">
        <TeamCarosel />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
