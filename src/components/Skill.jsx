import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Progress from './Progress';
import CircleProgress from './CircleProgress';
import useScrollEffect from "../CustomHook/scrollIntersection";

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
    <section id="skill" ref={skill} >
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
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="React"
              state="75"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="TailwindCss"
              state="90"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="HTML"
              state="80"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="CSS"
              state="85"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="Bootstrap"
              state="70"
            />
            <Progress
              isIntersection={isIntersection}
              skill={skill}
              name="SASS"
              state="90"
            />
          </div>
        </div>
        <div className="Professional_skill">
          <div className="section_title">
            <h3>Professional Skills</h3>
          </div>
          <div className="circle_progress_conteiner">
            <CircleProgress title="Communication" state="90"/>
            <CircleProgress title="Team Work" state="85"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skill;
