import {useState} from "react";

const useTooltioPossion = (targetedEle) => {
  const [screenX, setScreenX] = useState(0);
  let exMargin = targetedEle ? targetedEle.getBoundingClientRect().left : 0
  const tooltipDynamicPossion = (e) => {
    setScreenX(e.screenX - exMargin);
  };
  return [screenX, tooltipDynamicPossion];
};

export default useTooltioPossion;
