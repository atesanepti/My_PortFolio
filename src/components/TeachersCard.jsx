import React, { useEffect } from 'react'
import useBlurLoad from '../CustomHook/blurLoading';


const TeachersCard = ({ teacherData }) => {
  const { name, img, text, channel,channelLink } = teacherData;
  const { isLoaded, callback } = useBlurLoad();
  return (
    <div className="teacher_content ">
      <figure className={ isLoaded ? "loaded " + name : null + name}>
        <img src={img} alt={name} title={channel} onLoad={callback} loading='lazy'/>
      </figure>
      <div className="teacher_text_content">
        <h4>{name}</h4>
        <p>{text}</p>
        <a href={channelLink} className="btn">
          Visit
        </a>
      </div>
    </div>
  );
};

export default TeachersCard