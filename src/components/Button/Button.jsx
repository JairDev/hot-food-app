import { addToCart } from "actions";
import React from "react";
import { connect } from "react-redux";

const Button = ({ children, className, onClick, id, qty }) => {
  return (
    <div className="content-button">
      <form action="">
        <button
          onClick={onClick}
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
    onClick: (e) => {
      e.preventDefault();
      console.log("props button", ownProps.meal)
      dispatch(addToCart(ownProps.meal));
    },
  };
};

export default connect(null, mapDispatchToProps)(Button);
