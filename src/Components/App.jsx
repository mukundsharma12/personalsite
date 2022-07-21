import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer  from "./Footer";
export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
