import React, { useState } from 'react'
import Container from './Container';
import ProjectImg from './ProjectImg';
import Data from '../../public/data/projects.json'

// #Project Import 
import pro_1 from "../assets/imgs/fashion_ecom.png";
import pro_2 from "../assets/imgs/cloth_e-com.png";
import pro_3 from "../assets/imgs/bus_org.png";
import pro_4 from "../assets/imgs/collage_page.png";
import pro_5 from "../assets/imgs/digital_product_e-com.png";
import pro_6 from "../assets/imgs/medical.png";


const imgsList = [pro_1,pro_2,pro_3,pro_4,pro_5,pro_6]

const Projects = () => {
  const [projectData, setProjectData] = useState(Data)
  return (
    <section id="project">
      <Container>
        <div className="section_title">
          <h3>My Projects</h3>
        </div>
        <div className="projects-grid">
          {projectData.map((data, index) => (
            <ProjectImg img={imgsList[index]} title={data.title} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects