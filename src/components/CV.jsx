import  Container  from './Container'
import React from 'react'
import cv_img from '../assets/imgs/about_banner.png'
import { IoMdDownload } from "react-icons/io";
import useBlurLoad from '../CustomHook/blurLoading';
const CV = () => {
  const { isLoaded, callback } = useBlurLoad();
  return (
    <section id="cv">
      <Container>
        <div className="cv_banner">
          <figure className={isLoaded ? "loaded" : null}>
            <img src={cv_img} onLoad={callback} />
          </figure>
        </div>
        <div className="cv_content">
          <p>
            Hello! I'm San Bin Hoque, a front-end and back-end learner.I'm
            proficient in using JavaScript, React, and other front-end
            technologies to create front-end projects. I'm currently Working In
            back-end development.
          </p>
          <div className="skill_preview">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
            <span>react</span>
            <span>tailwindcss</span>
            <span>node js</span>
          </div>
          <button type="button" className="cv_btn btn">
            <span>Download CV</span>
            <IoMdDownload />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default CV