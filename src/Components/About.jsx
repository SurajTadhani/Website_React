import React from "react";
import web from "../Images/N10.jpg";
import "./Home.css";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        title="Welcome to Artificial intelligence with "
        buttonname="Contact Us"
        imgsrc={web}
        visit="/contact"
        lines ="Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems."
        
      />
    </>
  );
}

export default About;
