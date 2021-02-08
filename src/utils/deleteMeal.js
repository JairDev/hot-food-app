import { setLocal } from "./localStorage";

export function deleteMeal(id, array) {
  const deleteResult = array.filter((meal) => meal.idMeal !== id);
  setLocal(deleteResult);
  return deleteResult;
}