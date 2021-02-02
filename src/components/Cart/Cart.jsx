import Button from "components/Button/Button";
import Header from "components/Header/Header";
import MealsList from "components/MealsList/MealsList";
import React from "react";
import { connect } from "react-redux";

const classCartButton = "bg-buttoncolor w-full p-4 text-lg font-semibold";

const Cart = ({ cartMeals, subTotal }) => {
  const tax = 10;

  if (!cartMeals.length) {
    return (
      <>
        <Header />
        <div className="text-3xl flex h-screen items-center justify-center relative">
          Cart is empty...{" "}
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="content-meals-cart relative z-50 mt-16 p-4">
        <div className="title-cart">
          <h2 className="text-primary text-4xl lg:text-6xl font-semibold flex justify-center mb-12">Cart</h2>
        </div>
        <div className="meals-cart">
          <MealsList
            array={cartMeals}
            classCart={"style-cart"}
            id="mealscart"
          />
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
            <Button children={"ORDER"} className={classCartButton} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartMeals } = state;
  const sum = cartMeals
    .map(({ price, qty }) => {
      const result = parseInt(qty) * parseInt(price);
      return result;
    })
    .reduce((acc, current) => acc + current, 0);
  return { cartMeals, subTotal: sum };
};

export default connect(mapStateToProps)(Cart);
