import { addToCart } from "actions";
import React from "react";
import { connect } from "react-redux";

const Button = ({ children, className, onClick, id }) => {
  return (
    <div className="content-button">
      <form action="">
        <button
          aria-label={children}
          onClick={onClick}
          data-id={id}
          className={`${className}`}
        >
          {children}
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { meal }) => {
  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(addToCart(meal));
    },
  };
};

export default connect(null, mapDispatchToProps)(Button);
