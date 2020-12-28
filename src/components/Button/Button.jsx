import { addToCart, cart } from "actions";
import React from "react";
import { connect } from "react-redux";

const Button = ({ children, className, onClick, id, qty, meal }) => {
  console.log(children)
  return (
    <div className="content-button">
      <form action="">
        <button
          onClick={(e) => onClick(e, meal)}
          data-meal={meal}
          data-id={id}
          data-qty={qty}
          className={`${className}`}
        >
          {children}
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e, meal) => {
      e.preventDefault();
      // dispatch(addToCart(ownProps.id))
      dispatch(addToCart(ownProps.id, meal));
      // console.log("click")
      console.log(ownProps)
    },
  };
};

export default connect(null, mapDispatchToProps)(Button);
