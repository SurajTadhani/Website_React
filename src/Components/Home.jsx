import React from "react";
import web from "../Images/N4.jpg";
import './Home.css';
import Common from "./Common";

function Home() {
  return (
    <>
    <Common  
        title="Grow Your Business with"
        buttonname="Get Started"
        imgsrc={web}
        visit="/service"
        lines = 'We are the team of talented developer making websites and working on AI and machine learning'
        />
    </>
  );
}

export default Home;
