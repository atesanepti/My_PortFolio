import React, { useEffect, useState } from "react";

const ToolTip = ({ children, isHover, screenX }) => {
  return (
    <div
      style={{ top: `0%`, left: `${screenX}px` }}
      className={`${isHover ? "!block" : "hidden"} tooltip`}
    >
      {children}
    </div>
  );
};

export default ToolTip;
