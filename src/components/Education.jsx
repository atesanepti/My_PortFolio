import React from 'react'
import Container from './Container';

const Education = () => {
  return (
    <section id="education">
      <Container>
        <div className="section_title">
          <h3>Education</h3>
        </div>
        <div className="cards">
          <div className="card">
            <h4>Secondary School Certificate</h4>
            <span>2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              totam et quia saepe incidunt deserunt recusandae voluptatum non
              expedita quae!
            </p>
          </div>
          <div className="card">
            <h4>Diploma in Engineering</h4>
            <span>2022 / Feni Polytechnic Institue</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              totam et quia saepe incidunt deserunt recusandae voluptatum non
              expedita quae!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Education