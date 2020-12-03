import createNewObj from "./createNewObj";
import thisItemExist from "./thisItemExist";

const addToCart = (meal, qty, storage, setStorage) => {
  const nObj = createNewObj(meal, qty);
  const item = thisItemExist(storage, meal.idMeal);
  if (item === -1) {
    setStorage((prev) => [...prev, nObj]);
  } 
};

export default addToCart;
