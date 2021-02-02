export const nearScreen = (options, ref, dispatch, action) => {
  const header = document.querySelector(".content-header");

  const observer = (entries) => {
    entries.forEach((entrie) => {
      const targetClass = Array.from(entrie.target.classList);

      if (entrie.isIntersecting) {
        if (targetClass.includes("observer")) {
          dispatch(action());
        } else {
          header.classList.add("bg-bodycolor");
          header.classList.add("shadow-md");
        }
      } else {
        if (targetClass.includes("wrap-content")) {
          header.classList.remove("bg-bodycolor");
          header.classList.remove("shadow-md");
        }
      }
    });
  };
  const intersection = new IntersectionObserver(observer, options);

  intersection.observe(ref);
};