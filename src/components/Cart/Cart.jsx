import Button from "components/Button/Button";
import Header from "components/Header/Header";
import MealsList from "components/MealsList/MealsList";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import thisItemExist from "utils/thisItemExist";

const classCartButton = "bg-buttoncolor w-full p-4 text-lg font-semibold";

const Cart = () => {
  const [storage, setStorage] = useLocalStorage();
  const [subTotal, setSubTotal] = useState(0);
  const tax = 10;

  useEffect(() => {
    const map = storage.map(item => item.qty * item.price)
      .reduce((acc,current) => acc + current)
    setSubTotal(map);
    // return () => {
    //   cleanup
    // }
  }, [storage]);

  const handleChange = (e, itemMeal) => {
    const id = itemMeal.idMeal;
    const qty = parseInt(e.target.value);
    const nObj = Object.assign(
      {},
      {
        ...itemMeal,
        qty,
      }
    );
    const newArr = [...storage];
    const findIndex = thisItemExist(newArr, id);
    newArr.splice(findIndex, 1, nObj);
    setStorage(newArr);
  };

  const handleRemove = (e) => {
    const id = e.target.dataset.id
    const newArr = [...storage]
    const filter = newArr.filter(item => item.strMeal !== id)
    setStorage(filter)
    e.preventDefault()

  };

  const handleClick = (e) => {
    console.log("click")
    e.preventDefault(e)
  }

  return (
    <>
      <Header />
      <div className="content-meals-cart relative z-50 mt-16">
        <div className="title-cart">
          <h1 className="text-4xl flex justify-center mb-12">Cart</h1>
        </div>
        <div className="meals-cart">
          {/* <MealsList
            array={storage}
            classCart={"style-cart"}
            id="mealscart"
            onChange={handleChange}
            onRemove={handleRemove}
          /> */}
        </div>
        <div className="order-done flex p-4">
          <div className="content-make-order w-full">
            <div className="subtotal-price flex justify-between mb-2 font-semibold">
              <span>Sub-total:</span>
              <span className="ml-4">{subTotal}</span>
            </div>
            <div className="tax flex justify-between mb-2 font-semibold">
              <span>Delivery cost:</span>
              <span className="ml-4">${tax}</span>
            </div>
            <span className="total-cart-price flex justify-between mb-6 font-semibold">
              <span>Total:</span>
              <span className="ml-4">${subTotal + tax}</span>
            </span>
            <Button
              children={"ORDER"}
              className={classCartButton}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
