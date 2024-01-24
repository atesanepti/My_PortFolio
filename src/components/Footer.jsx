import React from 'react'
import Container from './Container';
import { IoMdPin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <div className="section_title">
          <h3>Contact Me</h3>
        </div>
        <div className="footer_content">
          <div className="cards contact_methods">
            <a href='#' className="contact_method card">
              <span className="icon">
                <IoMdPin />
              </span>
              <div>
                <h4>Address</h4>
                <span>
                  Md Ali Bazer, Feni Sadar, Feni (3900) <br /> bangladesh
                </span>
              </div>
            </a>
            <div className="contact_method card">
              <span className="icon">
                <IoIosMail />
              </span>
              <div>
                <h4>Emaill</h4>
                <span className='lowercase'>
                  epti060@gmail.com <br /> eptita41@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <form>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Your Email" />
              <textarea></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer