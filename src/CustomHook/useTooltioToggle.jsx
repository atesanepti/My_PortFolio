import { useState } from "react";

const useTooltioToggle = () => {
  const [isHover, setHover] = useState(false);
  const tooltipShow = () => {
    setHover(true);
  };
  const tooltipHide = () => {
    setHover(false);
  };
  
  return [isHover,{tooltipShow,tooltipHide}];
};

export default useTooltioToggle;
