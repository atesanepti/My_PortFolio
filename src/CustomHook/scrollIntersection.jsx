import { useEffect } from "react";

const useScrollEffect = (element, threshold,callback) => {
  const observer = new IntersectionObserver((entris) => {
    entris.forEach((entry) => {
      if (entry.isIntersecting) {
        // work()
        callback();
        
      }
    });
  }, threshold);
  observer.observe(element);
};

export default useScrollEffect;
