import { useState, useEffect } from "react";

const useIntersection = (id: string, rootMargin: string) => {
  const [isVisible, setState] = useState(false);
  if (typeof window === "undefined") return false;
  useEffect(() => {}, [window]);
  window.addEventListener(
    "load",
    (event) => {
      const element = document?.querySelector(id);
      createObserver(element);
    },
    false
  );

  const createObserver = (element: Element | null) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    element && observer.observe(element);
  };

  return isVisible;
};
export default useIntersection;
