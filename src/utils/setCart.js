import createNewObj from "./createNewObj";
import { setLocal } from "./localStorage";
import { thisItemExist } from "./thisItemExist";

export function setCart(cart, item) {
  const copyCart = [...cart];
  const obj = createNewObj(item);
  const itemExist = thisItemExist(copyCart, obj);
  setLocal(itemExist);
  return itemExist;
}