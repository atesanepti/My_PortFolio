import React from "react";
import { useRef } from "react";
const ProjectImg = ({ img, title }) => {
  const imgPEle = useRef();
  const imgEle = useRef();
  const hoverAnimation = () => {
    let imgHeight = imgEle.current.offsetHeight;
    let imgPHeight = imgPEle.current.offsetHeight;
    imgEle.current.style.transform = `translateY(${-(
      imgHeight - imgPHeight
    )}px)`;
  };
  const hoverAnimationDisabled = () => {
    imgEle.current.style.transform = `translateY(0)`;
  };
  return (
    <div className="blue_img" ref={imgPEle}>
      <img
        src={img}
        loading="lazy"
        onMouseLeave={hoverAnimationDisabled}
        onMouseOver={hoverAnimation}
        ref={imgEle}
      />
    </div>
  );
};

export default ProjectImg;
