import Button from "components/Button/Button";
import Header from "components/Header/Header";
import MealsList from "components/MealsList/MealsList";
import useLocalStorage from "hooks/useLocalStorage";
import React from "react";

const classCartButton = "bg-buttoncolor w-full p-4 text-lg font-semibold";

const Cart = ({ meals, onCart }) => {
  const [storage, setStorage] = useLocalStorage();

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    const find = storage.find(item => item.strMeal === e.target.dataset.id)
    const filter = storage.filter(item => item.strMeal !== e.target.dataset.id)
    console.log(filter)
    const lastQty = find.qty
    console.log(value, lastQty)
    if(value !== lastQty) {
      const nArr = [...storage]
      const nObj = {...find}
      
      nObj.qty = value
      console.log(nObj);
      console.log(nArr)
      console.log("not equal")
      setStorage([nObj, ...filter])
    }else {
      console.log("no")
    }
  };

  const handleClick = (e) => {
    console.log("Order");
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="content-meals-cart relative z-50 mt-16">
        <div className="title-cart">
          <h1 className="text-4xl flex justify-center mb-12">Cart</h1>
        </div>
        <div className="meals-cart">
          <MealsList
            array={storage}
            classCart={"style-cart"}
            id="mealscart"
            onChange={handleChange}
          />
        </div>
        <div className="order-done flex p-4">
          <div className="content-make-order w-full">
            <div className="subtotal-price flex justify-between mb-2 font-semibold">
              <span>Sub-total:</span>
              <span className="ml-4">$452</span>
            </div>
            <div className="tax flex justify-between mb-2 font-semibold">
              <span>Delivery cost:</span>
              <span className="ml-4">$10</span>
            </div>
            <span className="total-cart-price flex justify-between mb-6 font-semibold">
              <span>Total:</span>
              <span className="ml-4">$2342</span>
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
