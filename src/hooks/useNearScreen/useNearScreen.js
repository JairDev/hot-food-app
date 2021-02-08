import { useEffect, useRef } from "react";

export const useNearScreen = (rootMargin) => {
  const ref = useRef(null);

  useEffect(() => {
    const header = document.querySelector(".content-header");

    const observer = (entries) => {
      entries.forEach((entrie) => {
        const dataTarget = entrie.target.dataset.observer;
        const target = entrie.target;
        if (entrie.isIntersecting) {
          if (dataTarget === "observer-header") {
            header.classList.add("bg-bodycolor");
            header.classList.add("shadow-md");
          }
          if (dataTarget === "observer-image") {
            target.setAttribute("src", target.dataset.src);
          }
        } else {
          if (dataTarget === "observer-header") {
            header.classList.remove("bg-bodycolor");
            header.classList.remove("shadow-md");
          }
        }
      });
    };
    const intersection = new IntersectionObserver(observer, { rootMargin });
    intersection.observe(ref.current);
    return () => {};
  }, [rootMargin]);

  return { ref };
};
