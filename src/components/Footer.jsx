import React, { useState } from "react";
import Container from "./Container";
import { IoMdPin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputData((prevState) => {
      let newInputData = { ...prevState, [e.target.name]: e.target.value };
      return newInputData;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="footer">
      <Container>
        <div className="section_title">
          <h3>Contact Me</h3>
        </div>
        <div className="footer_content">
          <div className="cards contact_methods">
            <a
              href="https://www.google.com/maps/place/Mohammad+Ali+Bazar/@23.0627004,91.3585483,17z/data=!4m15!1m8!3m7!1s0x37536623dea4e8f9:0x167c86a4a24b6edf!2sMohammad+Ali+Bazar!8m2!3d23.0626955!4d91.3611232!10e1!16s%2Fg%2F1hf42jr31!3m5!1s0x37536623dea4e8f9:0x167c86a4a24b6edf!8m2!3d23.0626955!4d91.3611232!16s%2Fg%2F1hf42jr31?entry=ttu"
              target="blank"
              className="contact_method card"
            >
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
                <span className="lowercase">
                  epti060@gmail.com <br /> eptita41@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="First Name"
                value={inputData.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={inputData.lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={inputData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
              <textarea
                value={inputData.message}
                name="message"
                onChange={(e) => handleChange(e)}
                required
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
