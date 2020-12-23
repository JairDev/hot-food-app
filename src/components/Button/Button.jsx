import { addToCart, cart } from "actions"
import React from "react"
import { connect } from "react-redux"



const Button = ({children, className, onClick, id, qty, meal}) => {
  return (
    <div className="content-button">
      <form action="">
        <button onClick={onClick} data-meal={meal} data-id={id} data-qty={qty} className={`${className}`}>
          {children}
        </button>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault()
      // dispatch(addToCart(ownProps.id))
      dispatch(cart(ownProps.id))
      // console.log("click")
    }
  }
}

export default connect(null, mapDispatchToProps)(Button)
