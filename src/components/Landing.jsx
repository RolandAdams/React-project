import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import "./Landing.css";
import { TypeAnimation } from "react-type-animation";
import CodeCard from "./landingcards/CodeCard";
import PhotoCard from "./landingcards/PhotoCard";
import ResumeCard from "./landingcards/ResumeCard";
import AboutMeCard from "./landingcards/AboutMeCard";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="center-content-top">
        <h1>Hi! My name is Roland!</h1>
      </div>
      <div className="center-content">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I'm a Full Stack Developer",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "I'm a Husband",
            2000,
            "I'm a Veteran",
            2000,
            "I'm a Dog Dad",
            2000,
          ]}
          wrapper="span"
          speed={25}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="center-content-card">
        <div className="card-ind">
          <AboutMeCard />
        </div>
        <div className="card-ind">
          <CodeCard />
        </div>
        <div className="card-ind">
          <PhotoCard />
        </div>
        <div className="card-ind">
          <ResumeCard />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
