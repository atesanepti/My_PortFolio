import React from "react";
import Container from "./Container";
import ui_icon from "../assets/imgs/Icon_1.png";
import code_icon from "../assets/imgs/Icon_2.png";
import dev_icon from "../assets/imgs/Icon_3.png";
const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="section_title">
          <h3>What I Do</h3>
        </div>
        <div className="cards">
          <div className="card">
            <img src={ui_icon} />
            <h3>UI</h3>
            <p>
              I am a passionate and creative Web UI Designer with a keen eye for
              aesthetics and a strong foundation in user experience.
            </p>
          </div>
          <div className="card">
            <img src={code_icon} />
            <h3>Figma To HTML </h3>
            <p>
              You can use me to create a perfect web ui with HIGMA to HTML, PSD
              to HTML whit responsive and animated web pages
            </p>
          </div>
          <div className="card">
            <img src={dev_icon} />
            <h3>Web Development</h3>
            <p>I am a Full Stack Developer based on MERN Stack</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
