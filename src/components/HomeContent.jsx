import React, { useEffect, useRef, useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoMdPin } from "react-icons/io";
import useBlurLoad from '../CustomHook/blurLoading';
// #Import Home Banner 
import Img from '../assets/imgs/developer.png'
const HomeContent = () => {

  const {isLoaded,callback} = useBlurLoad()

  return (
    <div className="home_content">
      <div className="home_text_content">
        <span className="label">Hello I'm</span>
        <h3 className="name">San Bin Hoque</h3>
        <h4 className="tagline">FrontEnd Engineer</h4>
        <div className="contact_preview">
          <div className="handle">
            <IoIosMail />
            <span>epti060@gmail.com</span>
          </div>
          <div className="handle">
            <IoMdCall />
            <span>+880 173-515-6550</span>
          </div>
          <div className="handle">
            <IoMdPin />
            <span>Md Ali Bazer, Feni Sadar, Feni</span>
          </div>
        </div>
      </div>
      <div className="home_banner">
        <figure className={isLoaded ? "loaded" : null}>
          <img src={Img} onLoad={callback} loading="lazy" />
        </figure>
      </div>
    </div>
  );
};

export default HomeContent