import React, { useEffect, useState } from "react";
import useScrollEffect from "../CustomHook/scrollIntersection";

const Progress = ({ isIntersection, name, state, skill }) => {
  const [count, setCount] = useState(0);
  const contingAnimation = () => {
    const id = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < state) {
          return prevCount + 1;
        } else {
          clearInterval(id);
          return prevCount;
        }
      });
    }, 20);
  };
  useEffect(() => {
    useScrollEffect(skill.current, { threshold: 0.5 }, contingAnimation);
  }, [1]);
  return (
    <div className="progress_bar">
      <div className="progress_lable">
        <span>{name}</span>
        <span>{count}%</span>
      </div>
      <div className="horiz_line">
        <div
          className={`${
            isIntersection ? "active" : null
          } horiz_line_inner _${state}`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
