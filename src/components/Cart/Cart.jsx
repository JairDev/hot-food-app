import Header from "components/Header/Header"
import MealsList from "components/MealsList/MealsList"
import Nav from "components/Nav/Nav"
import React from "react"

const Cart = ({meals}) => {
  const meal = meals
  console.log(meal)
  return (
    <>
      <Header/>
      <div className="content-meals-cart relative z-50 mt-16">
        <div className="meals-cart">
          <MealsList array={meals} classCart={"style-cart"} id="mealscart"/>
        </div>
        <div className="total-price">
          <span className="total-products-price">$123</span>
        </div>
        <div className="order-done">
          <div className="subtotal-price">$452</div>
          <div className="tax">$10</div>
          <span className="total-cart-price">$2342</span>
        </div>
      </div>
    </>
  )
}

export default Cart
