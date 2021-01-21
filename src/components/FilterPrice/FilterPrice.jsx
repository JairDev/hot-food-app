import { filterByPrice } from "actions";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const FilterPrice = React.forwardRef(({ onClick, children }, ref) => {
  useEffect(() => {
    console.log(ref);
  }, []);
  return (
    <div className="content-filter-price">
      <form action="">
        <div className="meals-price">
          <label htmlFor="">
            <input ref={ref} onClick={onClick} type="checkbox" id="price" />
            <span className="span-80-150 ml-4 text-lg line-through">
              {children}
            </span>
          </label>
        </div>
      </form>
    </div>
  );
});

const mapStateToProps = (state) => {
  // console.log("link state", state)
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      //e.target.checked ? dispatch(filterByPrice(ownProps.filter)) : dispatch(filterByPrice("ALL"))
      dispatch(filterByPrice(ownProps.filter));
      console.log(e.target);
      console.log(ownProps);
    },
  };
};
const Link = connect(null, mapDispatchToProps, null, { forwardRef: true })(
  FilterPrice
);

export default Link;
