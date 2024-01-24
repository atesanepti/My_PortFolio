import { useState } from "react";

const useBlurLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const callback = () => {
    setIsLoaded(true);
  };
  return { isLoaded, callback };
};
export default useBlurLoad;
