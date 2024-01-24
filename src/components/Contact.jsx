import React from 'react'
import Container from './Container';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className="section_title">
          <h3>Interested to Work?</h3>
        </div>
        <div className="contact_content">
          <p>
            If you want me as a Frontend developer, Then Message
          </p>
          <a href='#footer' type='button' className='btn'>Contact Me</a>
        </div>
      </Container>
    </section>
  );
}

export default Contact