import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Progress from './Progress';
import CircleProgress from './CircleProgress';
import useScrollEffect from "../CustomHook/scrollIntersection";
const tootipData = [
  [
    {
      name: "English",
      state: "intermediate",
      color: "#16453e",
    },
    {
      name: "Bangla",
      state: "pro",
      color: "#bae4e5",
    },
    {
      name: "hindi",
      state: "communicative",
      color: "#c9f29b",
    },
  ],
  [
    {
      name: "Team Work",
      color: "#bae4e5",
    },
  ],
];
const Skill = () => {
  const [isIntersection, setIsInterSection] = useState(false);
  const skill = useRef();
  
  const progressAnimation = ()=>{
    setIsInterSection(true)
  }
  useEffect(()=>{
    // For Progressbar Animation 
    useScrollEffect(skill.current, { threshold : 0.5},progressAnimation);
  },[1])
  return (
    <section id="skill" ref={skill}>
      <Container>
        <div className="technical_skill">
          <div className="section_title">
            <h3>Technical Skills</h3>
          </div>
          <div className="progress_conteiner">
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="Javascript"
              state="86"
              tooltip="Comfortable On ES6, DOM-BOM Manipulating,OOP and Functional Programming"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="React"
              state="75"
              tooltip="Interactive web pages and single page Application, Reduce DOM Manipulating"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="TailwindCss"
              state="90"
              tooltip="Responsive Website For any Devices, Perfect UI Experience"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="HTML"
              state="80"
              tooltip="Most accessible web Element Create"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="css"
              state="85"
              tooltip="Design 3D and Animated webpage, Responsive by Media queries"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="bootstrap"
              state="70"
              tooltip="Responsive Website For any Devices, Top notch Card sider, Drop-Down menu, Carousel"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="SASS"
              state="90"
              tooltip="Design 3D and Animated webpage, Responsive by Media queries"
            />
          </div>
        </div>
        <div className="Professional_skill">
          <div className="section_title">
            <h3>Professional Skills</h3>
          </div>
          <div className="circle_progress_conteiner">
            <CircleProgress title="Communication" state="90" tooltip={tootipData[0]} />
            <CircleProgress title="Team Work" state="85" tooltip={tootipData[1]}/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skill;
