export function setLocal(item) {
  return localStorage.setItem("meals", JSON.stringify(item));
}