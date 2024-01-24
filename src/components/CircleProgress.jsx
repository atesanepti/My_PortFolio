import React from 'react'

const CircleProgress = ({title,state}) => {
  return (
    <div className="progress_bar text-center" >
      <div className="circle_outer">
        <div className="circle_inner">{state}%</div>
      </div>
      <h5 className='progress_title'>{title}</h5>
    </div>
  );
}

export default CircleProgress