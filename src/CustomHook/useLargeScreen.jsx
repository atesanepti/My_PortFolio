import React, { useEffect, useState } from "react";

const useLargeScreen = (screen) => {
  const [isLarge, setLarge] = useState(false);
  let size = screen || 1000;
  const checkScreenSize = () => {
    if (window.innerWidth > size) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  };
  useEffect(() => {
    checkScreenSize()
    window.addEventListener("resize",checkScreenSize)
  }, [1]);
  return isLarge;
};

export default useLargeScreen;
