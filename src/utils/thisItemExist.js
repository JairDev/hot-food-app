import { setLocal } from "./localStorage";

function findIndex(array, key, id) {
  const findIdx = array.findIndex(item => item[key] === id)
  return findIdx
}

export function thisItemExist(arr, item) {
  const addClass = document.querySelectorAll(".button-add");
  const id = item.strMeal;
  const findIdx = findIndex(arr, "strMeal", id);
  if (findIdx === -1) {
    const pushItem = [...arr, item];
    setLocal(pushItem);
    addClass.forEach((button) => {
      setTimeout(() => {
        button.classList.remove("success");
      }, 600);
      return button.dataset.id === id
        ? button.classList.add("success")
        : button.dataset.id;
    });
    return [...arr, item];
  } else {
    addClass.forEach((button) => {
      setTimeout(() => {
        button.classList.remove("error");
      }, 600);
      return button.dataset.id === id
        ? button.classList.add("error")
        : button.dataset.id;
    });
    return arr;
  }
}
export default findIndex
