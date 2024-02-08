import React, { useRef } from "react";
import ToolTip from "./ToolTip";
import DotIcon from "./DotIcon";
import useTooltioToggle from "../CustomHook/useTooltioToggle";
import useTooltioPossion from "../CustomHook/useTooltioPossion";
import useLargeScreen from "./../CustomHook/useLargeScreen";

const CircleProgress = ({ title, state, tooltip }) => {
  const progressEle = useRef();
  const [isHover, { tooltipShow, tooltipHide }] = useTooltioToggle();
  const [screenX, tooltipDynamicPossion] = useTooltioPossion(
    progressEle.current
  );
  const isLarge = useLargeScreen();
  return (
    <div
      ref={progressEle}
      className="progress_bar circle text-center"
      onMouseOver={tooltipShow}
      onMouseLeave={tooltipHide}
      onMouseEnter={(e) => tooltipDynamicPossion(e)}
    >
      {isLarge ? (
        <ToolTip isHover={isHover} screenX={screenX}>
          <div className="px-4">
            <ul>
              {tooltip.map((tooltip) => (
                <li key={Math.random()} className="flex items-center gap-2">
                  <span className="tooltip_pointer">
                    <DotIcon color={tooltip.color} />
                  </span>
                  <span>{tooltip.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </ToolTip>
      ) : null}
      <div className="circle_outer">
        <div className="circle_inner">{state}%</div>
      </div>
      <h5 className="progress_title">{title}</h5>
    </div>
  );
};

export default CircleProgress;
