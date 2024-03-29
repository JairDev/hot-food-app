import { filterByPrice } from "actions";
import React from "react";
import { connect } from "react-redux";

const FilterPrice = ({ onClick, children, forwardRef, tag }) => {
  return (
    <div className="content-filter-price">
      <form action="">
        <div className="meals-price">
          <label htmlFor={tag}>
            <input
              id={tag}
              ref={forwardRef}
              onClick={onClick}
              type="checkbox"
            />
            <span className="span-80-150 ml-4 text-base cursor-pointer">
              {children}
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      dispatch(filterByPrice(ownProps.filter));
      ownProps.arr.map((item) => {
        if (item.checked && item.style.pointerEvents === "none") {
          item.nextSibling.style = "text-decoration: none";
          item.style = "pointer-events: auto";
          item.nextSibling.style = "pointer-events: auto";
          item.checked = false;
          item.disabled = "";
        }
      });
      e.target.nextSibling.style =
        "text-decoration: line-through; color: grey;";
      e.target.style = "pointer-events: none";
      e.target.disabled = "disabled";
    },
  };
};
export default connect(null, mapDispatchToProps)(FilterPrice);
