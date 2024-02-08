import React, { useEffect, useState, useRef } from "react";
import useScrollEffect from "../CustomHook/scrollIntersection";
import ToolTip from "./ToolTip";
import useTooltioToggle from "../CustomHook/useTooltioToggle";
import useTooltioPossion from "../CustomHook/useTooltioPossion";
import useLargeScreen from "../CustomHook/useLargeScreen";

const Progress = ({ isIntersection, name, state, skill, tooltip }) => {
  const [count, setCount] = useState(0);
  const progressElement = useRef();
  const [isHover, { tooltipShow, tooltipHide }] = useTooltioToggle();
  const isLarge = useLargeScreen();
  const [screenX, tooltipDynamicPossion] = useTooltioPossion(
    progressElement.current
  );
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
    <div
      ref={progressElement}
      className="progress_bar"
      onMouseOver={tooltipShow}
      onMouseLeave={tooltipHide}
      onMouseEnter={(e) => tooltipDynamicPossion(e)}
    >
      {isLarge ? (
        <ToolTip isHover={isHover} screenX={screenX}>
          <div className="w-[300px]">
            <span>{tooltip}</span>
          </div>
        </ToolTip>
      ) : null}
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
