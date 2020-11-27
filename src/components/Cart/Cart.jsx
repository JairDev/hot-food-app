import Header from "components/Header/Header"
import Nav from "components/Nav/Nav"
import React from "react"

const Cart = ({meals}) => {
  const meal = meals
  return (
    <>
      <Header/>
      <div className="content-meals-cart">
        <div className="meals-cart">
          
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
